<template>
    <section>
        <img
            src=""
            :alt="vs(['first_name', 'last_name'])"
        >

        <ui-button>
            Click
        </ui-button>
    </section>
</template>



<script setup lang="ts">
const { vs } = useVocabulary();
</script>
