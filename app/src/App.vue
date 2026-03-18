<template>
  <div>
    <h1>Squirrel</h1>

    <RouterLink class="router__link" to="/vue-lists">Go to Squirrels</RouterLink>

    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.router__link {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}
</style>
