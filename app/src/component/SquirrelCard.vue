<template>
  <div>
    <h2>{{ props.squirrel.name }}></h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  squirrel: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 100px;
}
</style>
