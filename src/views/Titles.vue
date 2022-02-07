<template>
<div class="flex flex-col w-full place-items-center">
    <titles-widget :getTitles="getFunctionForNewspaper('clarin')" :name="'Clarin'"></titles-widget>
    <titles-widget :getTitles="getFunctionForNewspaper('rosariotres')" :name="'Rosario3'"></titles-widget>
    <titles-widget :getTitles="getFunctionForNewspaper('lacapital')" :name="'La Capital'"></titles-widget>
    <titles-widget :getTitles="getFunctionForNewspaper('lanacion')" :name="'La Nacion'"></titles-widget>
</div>
</template>

<script>
import TitlesWidget from "@/components/ui/TitlesWidget.vue";

export default {
    components: {TitlesWidget},
    methods: {
        getFunctionForNewspaper(newspaperName) {
            return fetch(`${process.env.API_URL}/titles/${newspaperName}`)
                .then(res => res.json())
                .catch(error => console.log(error))
                .then(titles => titles)
                .catch(error => console.log(error))
        }
    },
}
</script>

<style>

</style>