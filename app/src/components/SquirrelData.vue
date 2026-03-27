<template>
  <div>
    <h2 class="list__title">Squirrel List</h2>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div v-if="squirrels.length">
      <SquirrelCard
        v-for="(squirrel, index) in squirrels"
        :key="index"
        :squirrel="squirrel"
        :id="index"
      />
    </div>

    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SquirrelCard from './SquirrelCard.vue'

const squirrels = ref([])
const errorMessage = ref('')

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    squirrels.value = data.slice(0, 1000)
  } catch (error) {
    errorMessage.value = `Failed to load squirrels: ${error.message}`
  }
}

onMounted(() => {
  getSquirrels()
})
</script>

<style scoped>
.list__title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 40px;
}

div {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
