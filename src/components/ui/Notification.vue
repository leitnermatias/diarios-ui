<template>
  <div
   :class="`w-full h-24 flex flex-col
    bg-${colorForNotificationType(notification.type)}-500 bg-opacity-25 
    border-2 border-${colorForNotificationType(notification.type)}-900 border-opacity-10 text-md shadow-xl items-center justify-center hover:bg-opacity-5`"
    @click="$store.commit('clearNotification', notification)"
    >
      <span class="text-sm font-mono">{{notification.msg}}</span>
  </div>
</template>

<script>
export default {
  props: {
    notification: Object
  },
  methods: {
    colorForNotificationType(type) {
      switch (type) {
        case "ERROR":
          return "red";
        case "WARNING":
          return "yellow";
        case "OK":
          return "green";
        default:
          return "blue";
      }
    },

    clearNotification() {
      window.setInterval(() => {
        if (!this.loading) {
        this.$store.commit('clearNotification', this.notification);
        }
      }, 10000)
    }
  },
  mounted() {
    this.notification.autoPop = this.notification.autoPop === undefined ? true : this.notification.autoPop;
    if (this.notification.autoPop) {
      this.clearNotification();
    }
  }
}
</script>

<style>

</style>