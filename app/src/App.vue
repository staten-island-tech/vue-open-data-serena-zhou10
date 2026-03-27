<template>
  <div>
    <header>
      <nav class="router">
        <RouterLink class="router__link" to="/">Home</RouterLink>
        <RouterLink class="router__link" to="/vue-lists">NYC Squirrel Data</RouterLink>
        <RouterLink class="router__link" to="/vue-chart">Squirrel Locations</RouterLink>
        <RouterLink class="router__link" to="/vue-pie">Squirrel Fur Colors</RouterLink>
        <RouterLink class="router__link" to="/vue-filter">Squirrel Locations by Color</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
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
