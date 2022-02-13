<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex flex-row gap-9 bg-gray-200 font-light text-gray-900 px-10 py-2 justify-center">
      <router-link class="nav-item" to="/">Inicio</router-link>
      <router-link class="nav-item" to="/newspapers">Diarios</router-link>
      <router-link class="nav-item" to="/titles">Noticias</router-link>
    </div>
    <router-view/>
    <div v-if="$store.state.notifications.length > 0" class="w-64 h-screen flex flex-col gap-1 absolute top-0 right-0 bg-transparent">
        <notification v-for="notification,index in $store.state.notifications" :key="index"  :notification="notification"></notification>
    </div>
    
  </div>
</template>

<script>
import Notification from "./components/ui/Notification.vue";

export default {
  components: {Notification},
  name: 'App',
  mounted() {
    this.$store.commit("addNotification", {type: 'OK', msg: `Currently running API url: ${process.env.API_URL}`})
  }
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
