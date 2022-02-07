<template>
  <div class="flex w-5/6 flex-col p-2">

    <div @click="hide" class="w-full flex flex-row justify-center gap-4 bg-gray-300  border-b-4 border-gray-900 border-opacity-30 rounded-md hover:border-opacity-60 hover:bg-opacity-90">
        <span >{{hidden ? ">   " : "v   "}}</span>
        <span class="text-2xl font-serif">{{name}}</span>
    </div>

    <div v-if="!hidden" @click="hide">
        <div class="flex flex-col place-items-center p-6 border-4 border-gray-900 border-opacity-30 w-full hover:border-opacity-60" v-if="titles !== null && titles.length > 0">
            <div class="flex flex-col gap-9 m-2 p-2 text-center place-items-center border-b-2 border-t-2 pt-6 border-black border-opacity-50" v-for="title in titles" :key="title.id">
                <a class="text-center text-2xl font-serif border-4 pt-4 pb-2 pl-4 pr-2 border-blue-300 rounded-b-lg" :href="title.url" >{{title.header}}</a>
                <img class="w-2/4 border-4 border-blue-300 rounded-md" :src="title.img">
            </div>
        </div>
        <div v-else-if="titles !== null && titles.length === 0">
            <span>No se encontraron titulos</span>
        </div>
        <div v-else-if="titles === null">
            <span>Cargando...</span>
        </div>
    </div>
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