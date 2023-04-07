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

<v-container fluid>

<v-row>
    <v-list bg-color="pink" class="w-full h-[500px] m-0 text-white">
        <span v-if="bookmarkedTasks.length < 1" class="p-5 font-bold">Bookmarked tasks list is empty!!</span>        
        <span v-else class="p-5 font-bold">Your Bookmarked Tasks</span>
        <v-list-item v-for="(task, index) in bookmarkedTasks" class="hover:bg-red-100">
            {{ index + 1 }}: {{ task.name }}


            <v-divider thickness="3px"></v-divider>


        </v-list-item>

  </v-list>
</v-row>


</v-container>











</template>

<style scoped>

</style>
