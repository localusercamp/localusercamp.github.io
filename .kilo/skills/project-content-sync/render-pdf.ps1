param(
    [Parameter(Mandatory = $true)]
    [string]$PdfPath,

    [Parameter(Mandatory = $true)]
    [string]$OutDir
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime

$pdfFullPath = (Resolve-Path -LiteralPath $PdfPath).Path
$outFullPath = [System.IO.Path]::GetFullPath($OutDir)

New-Item -ItemType Directory -Path $outFullPath -Force | Out-Null
Get-ChildItem -Path $outFullPath -Filter "page-*.png" -ErrorAction SilentlyContinue | Remove-Item -Force

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq "AsTask" -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq "IAsyncOperation``1"
})[0]

$asTaskAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq "AsTask" -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq "IAsyncAction"
})[0]

function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

function AwaitAction($WinRtAction) {
    $netTask = $asTaskAction.Invoke($null, @($WinRtAction))
    $netTask.Wait(-1) | Out-Null
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.DataReader, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null

$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfFullPath)) ([Windows.Storage.StorageFile])
$document = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])

Write-Output ("Pages: " + $document.PageCount)

for ($index = 0; $index -lt $document.PageCount; $index++) {
    $page = $document.GetPage($index)

    $options = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    $options.DestinationWidth = [uint32]($page.Size.Width * 2)

    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    AwaitAction ($page.RenderToStreamAsync($stream, $options))

    $size = [int]$stream.Size
    $reader = New-Object Windows.Storage.Streams.DataReader($stream.GetInputStreamAt(0))
    Await ($reader.LoadAsync([uint32]$size)) ([uint32]) | Out-Null

    $bytes = New-Object byte[] $size
    $reader.ReadBytes($bytes)

    $pageOutPath = Join-Path $outFullPath ("page-{0}.png" -f ($index + 1))
    [System.IO.File]::WriteAllBytes($pageOutPath, $bytes)

    $reader.Dispose()
    $stream.Dispose()
    $page.Dispose()

    Write-Output ("Written: " + $pageOutPath)
}
