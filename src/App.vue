<template>
  <div class="w-full h-full border-2 border-gray-800">
    <div class="flex flex-row gap-9 bg-gray-200 font-light text-gray-900 px-10 py-2">
      <router-link class="nav-item" to="/">Inicio</router-link>
      <router-link class="nav-item" to="/">Otro</router-link>
      <router-link class="nav-item" to="/">Otro</router-link>
      <router-link class="nav-item" to="/">Otro</router-link>
      <router-link class="nav-item" to="/">Otro</router-link>
      <router-link class="nav-item" to="/">Otro</router-link>
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
    width: 5%;
    border: 1px solid white;
    text-align: center;
  }

  .nav-item:hover {
    border: 2px solid white;
    box-shadow: inset 5em 1em white;
  }
</style>
