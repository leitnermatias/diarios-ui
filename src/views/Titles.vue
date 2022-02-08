<template>
<div class="flex flex-col w-full h-full py-4 px-9 items-center">

    <button class="bg-blue-500 bg-opacity-50 hover:bg-opacity-80 rounded w-11/12" @click="showFilter = !showFilter">{{showFilter ? "v   " : ">   "}}Filtro</button>

    <!-- Filter -->
    <div v-if="showFilter" class="flex flex-row justify-center shadow-md flex-wrap gap-2 w-11/12 p-4 bg-blue-200 bg-opacity-50 border-4 border-blue-200">
        <div class="flex flex-row w-full mb-10 gap-4">
            <div class="">
                <label for="newspaper">Nombre del diario</label><br>
                <input type="text" name="newspaper" v-model="filter.newspaper">
            </div>
            <div>
                <label for="header">Nombre de la noticia</label><br>
                <input type="text" name="header" v-model="filter.header">
            </div>
        </div>
        <button class="border-2 border-blue-400 w-1/5 bg-blue-300 hover:border-opacity-50 rounded-md hover:bg-opacity-50" @click="search">Buscar</button>
        
    </div>

    <!-- Grid -->
    <div v-if="titles.length > 0" class="w-11/12 flex flex-col gap-1 shadow-2xl border-4 border-gray-300 p-2 bg-gray-600 bg-opacity-5">
        <div class="w-full h-80 flex flex-row shadow-xl text-center border-2 border-gray-900 border-opacity-30 max-h-40 opacity-90 hover:opacity-100" v-for="title in titles" :key="title.id">
            <img class="h-full w-80 border-gray-700 border-r-2 border-opacity-20" :src="title.img">
            <span class="w-40 h-12 text-sm">{{formatNewspaperName(title.newspaper.name)}}</span>
            <a class="flex flex-row w-full h-full gap-9 p-4 text-xl" :href="title.url">
                {{title.header}}
            </a>
          
        </div>
    </div>
    <div v-else-if="loading">
        <h1>Cargando...</h1>
    </div>
    <div v-else>
        <h1>No se encontraron noticias</h1>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            loading: false,
            showFilter: true,
            titles: [],
            filter: {
                newspaper: "",
                header: ""
            }
        }
    },
    
    methods: {
        search() {
            this.loading = true;
            fetch(`${process.env.API_URL}/titles?newspaper=${this.filter.newspaper}&header=${this.filter.header}`)
            .then(res => res.json())
            .catch(error => console.log(error))
            .then(data => this.titles = data.result)
            .catch(error => console.log(error))
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
        this.search()
    }


}
</script>

<style>
    input {
        padding-left: 10px;
        padding-bottom: 5px;
        border: 1px solid gray;
        text-align: left;
        line-height: 2;
    }

    input:focus {
        outline:none
    }
</style>