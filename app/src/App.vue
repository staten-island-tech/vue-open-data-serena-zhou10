<template>
  <div>
    <div class="router">
      <RouterLink class="router__link" to="/vue-lists">NYC Squirrel Data</RouterLink>
      <RouterLink class="router__link" to="/vue-chart">Squirrel Chart</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

div {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  align-items: center;
}

.router {
  background-color: rgb(211, 201, 190);
  margin: 2rem;
}

.router__link {
  padding: 1rem;
}
</style>
