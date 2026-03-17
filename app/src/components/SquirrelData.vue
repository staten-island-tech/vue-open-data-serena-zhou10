<template>
  <div>
    <h2>Squirrel List</h2>

    <div v-if="squirrels.length">
      <SquirrelCard v-for="(squirrel, index) in squirrels" :key="index" :squirrel="squirrel" :id="index" />
    </div>

    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SquirrelCard from './SquirrelCard.vue'

const squirrels = ref([])

async function getSquirrels() {
  const response = await fetch(
    'https://data.cityofnewyork.us/resource/vfnx-vebw.json'
  )
  const data = await response.json()

  squirrels.value = data.slice(0, 101)
}

onMounted(() => {
  getSquirrels()
})
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>