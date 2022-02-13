<template>
<div class="flex flex-col w-full h-full py-4 px-9 items-center">

    <button class="bg-blue-500 bg-opacity-50 hover:bg-opacity-80 rounded w-11/12" @click="showFilter = !showFilter">{{showFilter ? "v   " : ">   "}}Filtro</button>

    <!-- Filter -->
    <div v-if="showFilter" class="flex flex-row justify-center shadow-md flex-wrap gap-2 w-11/12 p-4 bg-blue-200 bg-opacity-50 border-4 border-blue-200 text-center">
        <div class="flex flex-row w-full mb-10 gap-4">

            <div class="flex flex-col gap-1 p-2 bg-blue-700 bg-opacity-30 shadow-md rounded-md border-4 border-blue-200 border-opacity-50">
                <label for="newspaper">Nombre del diario</label><br>
                <select class="bg-white text-md rounded-md" name="newspaper" v-model="filter.newspaper">
                    <option value="">Seleccionar</option>
                    <option v-for="newspaper in newspapers" :key="newspaper.id" :value="newspaper.id">{{newspaper.name}}</option>
                </select>
            </div>

            <div class="flex flex-col gap-1 p-2 bg-blue-700 bg-opacity-30 shadow-md rounded-md border-4 border-blue-200 border-opacity-50">
                <label for="header">Titulo de la noticia</label><br>
                <input class="focus:outline-none px-2 rounded-md text-sm w-full h-full" type="text" name="header" v-model="filter.header">
            </div>
            <div class="flex flex-col w-1/12 gap-1 p-2 bg-blue-700 bg-opacity-30 shadow-md rounded-md border-4 border-blue-200 border-opacity-50">
                <label for="header">Limitar</label><br>
                <input class="focus:outline-none px-2 rounded-md text-sm w-full h-full" type="number" name="header" v-model="filter.limit">
            </div>
        </div>
        <button class="border-2 border-blue-400 w-1/5 bg-blue-300 hover:border-opacity-50 rounded-md hover:bg-opacity-50" @click="search">Buscar</button>
        
    </div>

    <!-- Grid -->
    
        <div v-if="titles.length > 0 && titles !== undefined" class="w-11/12 flex flex-col gap-1 shadow-2xl border-4 border-gray-300 p-2 bg-blue-300 bg-opacity-15">
            <span class="text-xl text-blue-900 text-opacity-15 mb-4 border-b-4 border-blue-900 border-opacity-10 text-center">Cantidad de noticias encontradas: {{titles.length}}</span>
            <div class="w-full h-80 flex flex-row items-center shadow-3xl text-center border-2 border-gray-900 border-opacity-30 max-h-40 opacity-90 hover:opacity-100" v-for="title in titles" :key="title.id">
                <img class="h-full w-96 border-blue-700 border-2 border-opacity-25 min-w-0 rounded-sm" :src="title.img">
                <div class="flex flex-col w-40 h-full text-sm bg-blue-50 bg-opacity-5 border-l-2 border-r-2 border-gray-900 rounded-sm p-2 shadow-inner">
                    <span class="text-gray-900 font-serif h-5/6">
                        {{newspapers.filter(n => n.id === title.newspaper_id)[0].name}}
                    </span>
                    <span class="text-black font-mono text-xs border-white">
                        {{new Date(title.time_created).toLocaleDateString()}}
                    </span>
                </div>
                <a class="w-full h-full bg-white gap-9 text-xl font-bold border-l-2 border-blue-500 shadow-inner" :href="title.url">
                    {{title.header}}
                </a>
            
            </div>
        </div>


</div>
</template>

<script>

export default {
    data() {
        return {
            loading: false,
            showFilter: true,
            titlesCount: null,
            titles: [],
            newspapers: [],
            filter: {
                newspaper: "",
                header: "",
                limit: 50,
            }
        }
    },
    
    methods: {
        search() {
            this.loading = true;
            fetch(`${process.env.API_URL}/titles?newspaper=${this.filter.newspaper}&header=${this.filter.header}&limit=${this.filter.limit}`)
            .then(res => res.json())
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener noticias: ${error}`}))
            .then(data => this.titles = data)
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener noticias: ${error}`}))
            this.loading = false;
        },

        getNewspapers() {
            fetch(`${process.env.API_URL}/newspapers`)
            .then(res => res.json())
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener diarios: ${error}`}))
            .then(data => this.newspapers = data)
            .catch(error => this.$store.commit("addNotification", {type: 'ERROR', msg: `Error al intentar obtener diarios: ${error}`}))
        },
    },

    mounted() {
        this.getNewspapers()
        this.search()
    }


}
</script>