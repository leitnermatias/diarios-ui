<template>
  <div class="flex flex-col place-items-center self-center w-1/2 border-6 border-black">
    <span>{{apiUrl}}</span>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      apiUrl: process.env.API_URL,
      notifications: this.$store.state.notifications
    }
  },
  methods: {
  }
}
</script>
