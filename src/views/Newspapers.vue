<template>
<loadable :loading="loading" :items="newspapers">
  <div class="w-11/12 m-auto mt-4 border-black border-2">
      <div class="border-b-2 border-blue-500 border-opacity-30 bg-blue-900 bg-opacity-5" v-for="newspaper in newspapers" :key="newspaper.id">
          <h1 class="bg-blue-900 bg-opacity-10">{{newspaper.name}}</h1>
          <span class="">Link de ultimas noticias: {{newspaper.titles_url}}</span>
      </div>
  </div>
</loadable>
</template>

<script>
import Loadable from "../components/ui/Loadable.vue"

export default {
    components: {Loadable},
    data() {
        return {
            loading: false,
            newspapers : []
        }
    },
    methods: {
        getNewspapers() {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            this.loading = true;
            sleep(10)
            fetch(`${process.env.API_URL}/newspapers`)
            .then(res => res.json())
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener diarios: ${error}`}))
            .then(data => this.newspapers = data)
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener diarios: ${error}`}))
            this.loading = false;
        },


        formatNewspaperName(name) {
            // TODO: add a column in the Newspaper table directly instead of this function
            switch (name) {
                case "rosario3":
                    return "Rosario 3"
                case "clarin":
                    return "Clarin"
                case "lacapital":
                    return "La Capital"
                case "lanacion":
                    return "La Nacion"
                default:
                    "~"
                    break;
            }
        }
    },

    mounted() {
        this.getNewspapers()
    }
}   
</script>

<style>

</style>