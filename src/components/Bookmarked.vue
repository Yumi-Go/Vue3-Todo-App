<script setup>
import { ref } from 'vue'
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const allTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

console.log(typeof allTasks.value);
console.log(allTasks.value);

// const bookmarkedTasks = ref([]);


// const objAllTasks = JSON.parse(allTasks);

const bookmarkedTasks = ref([]);

const getBookmarkedTasks = () => {
    const result = [];
    if (Object.keys(allTasks.value).length > 0) {
        console.log(Object.keys(allTasks.value).length);
        allTasks.value.map(obj => {
            if (obj.bookmarked == true) {
                bookmarkedTasks.value.push(obj);
            }
        });
    }
    return result;
    
}

getBookmarkedTasks();


</script>

<template>
<h2>this is Bookmarked component</h2>

<li v-if="bookmarkedTasks.length > 0" v-for="task in bookmarkedTasks">
    {{ task.name }}
</li>
<p v-else>Bookmarked tasks list is empty.</p>



</template>

<style scoped>

</style>
