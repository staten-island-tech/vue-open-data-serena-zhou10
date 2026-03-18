<template>
  <div class="card">
    <h3>Squirrel #{{ id }}</h3>
    <p>Fur Color: {{ squirrel.primary_fur_color || 'Unknown' }}</p>
    <p>Location: {{ squirrel.location || 'Unknown' }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  squirrel: Object,
  id: Number,
})

const { squirrel, id } = props
</script>

<style scoped>
.card {
  font-family: 'Poppins', sans-serif;
  border: 1px solid black;
  padding: 10px;
  width: 150px;
  text-align: center;
}
</style>
