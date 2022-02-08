<template>
  <div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            titles: null,
            hidden: true
        }
    },

    props: {
        name: String,
        getTitles: Promise
    },

    methods: {
        hide() {
            this.hidden = !this.hidden;

            if (this.hidden) {
                this.titles = null;
            } else {
                this.getTitles.then(titles => this.titles = titles)
            }
        },
    },
}
</script>

<style>

</style>