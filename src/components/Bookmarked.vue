<script setup>
import { ref } from 'vue'
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const allTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

console.log(typeof allTasks.value);
console.log(allTasks.value);

// const bookmarkedTasks = ref([]);


// const objAllTasks = JSON.parse(allTasks);


const bookmarkedTasks = () => {
    const result = [];
    // if (Object.keys(allTasks.value).length > 0) {
        console.log(Object.keys(allTasks.value).length);
        allTasks.value.map(obj => {
            if (obj.bookmarked == true) {
                result.push(obj.id);
            }
        });
    // }
    // else {
    //     result = "No bookmarked task"
    // }
    return result;
    
}



// console.log(allTasks);
// console.log(allTasks.value);
// console.log(bookmarkedTasks.value);


</script>

<template>
<h2>this is Bookmarked component</h2>
<li v-for="task in bookmarkedTasks">
    {{ task }}
</li>




</template>

<style scoped>

</style>
