<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex flex-row gap-9 bg-gray-200 font-light text-gray-900 px-10 py-2 justify-center">
      <router-link class="nav-item" to="/">Inicio</router-link>
      <router-link class="nav-item" to="/titles">Titulos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  .nav-item {
    padding: 2px;
    width: 8%;
    border: 1px solid white;
    text-align: center;
  }

  .nav-item:hover {
    border: 2px solid white;
    background: rgba(53, 166, 231, 0.349);
  }
</style>
