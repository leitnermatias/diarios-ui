<template>
  <div class="w-full h-full">
      <div v-if="items.length > 0">
          <slot></slot> 
      </div>
      <div v-else>
        <h1 class="">Cargando...</h1>
      </div>
      
  </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>

<style>

</style>