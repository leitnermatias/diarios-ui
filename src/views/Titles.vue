<template>
<div class="flex flex-col w-full place-items-center">
    <titles-widget :titlesPromise="getPromiseForTitles('clarin')" :name="'Clarin'"></titles-widget>
    <titles-widget :titlesPromise="getPromiseForTitles('rosariotres')" :name="'Rosario3'"></titles-widget>
    <titles-widget :titlesPromise="getPromiseForTitles('lacapital')" :name="'La Capital'"></titles-widget>
    <titles-widget :titlesPromise="getPromiseForTitles('lanacion')" :name="'La Nacion'"></titles-widget>
</div>
</template>

<script>
import TitlesWidget from "@/components/ui/TitlesWidget.vue";

export default {
    components: {TitlesWidget},
    methods: {
        getPromiseForTitles(newspaperName) {
            return fetch(`http://192.168.0.99:5000/titles/${newspaperName}`)
        }
    },
}
</script>

<style>

</style>