<script setup>
import { ref } from 'vue'
const bookmaredTasks = ref([]);
const getItems = () => {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            // if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                bookmaredTasks.value.push(localStorage.getItem(localStorage.key(i)));
            // }
        }
    }
}
getItems();



</script>

<template>
<h2>this is Bookmarked component</h2>
<li v-for="task in bookmaredTasks" v-bind:key="task">
    {{ task }}
</li>





</template>

<style scoped>

</style>
