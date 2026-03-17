<template>
  <div>
    <h2>{{ SquirrelData.name }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const squirrel = ref(null)
async function getSquirrel(id) {
  const response = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
  const data = await response.json()
  pokemon.value = data
}
watch(
  () => route.params.id,
  function (id) {
    getSquirrel(id)
  },
)
onMounted(function () {
  getSquirrel()
})
</script>

<style scoped></style>
