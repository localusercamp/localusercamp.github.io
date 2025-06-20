<template>
    <div>
        <input
            v-model="id"
            type="number"
        >

        <button
            @click="getHero()"
            v-text="'get'"
        />

        {{ hero }}
    </div>
</template>



<script setup lang="ts">
const id = ref(10);

const hero = ref(null);

async function getHero() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id.value}`, {
        method: "GET",
    });

    hero.value = await response.json();
}
</script>
