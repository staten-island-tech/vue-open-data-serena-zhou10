<template>
  <div>
    <div class="router">
      <RouterLink class="router__link" to="/vue-lists">NYC Squirrel Data</RouterLink>
    </div>
    <RouterView />
    <h1>Squirrel Data</h1>
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
