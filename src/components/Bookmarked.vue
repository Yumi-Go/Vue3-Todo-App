<script setup>
import { ref } from 'vue'
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { mdiBookmarkMultiple } from '@mdi/js'

const allTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

const bookmarkedTasks = ref([]);

function getBookmarkedTasks() {
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
<v-container fluid class="px-5">
    <v-row>
        <v-list bg-color="pink" class="w-full h-[500px] m-0 text-white">
            <v-list-item v-if="bookmarkedTasks.length < 1" class="font-bold">Bookmarked tasks list is empty!!</v-list-item>        
            <v-list-item v-else class="font-bold">
                <v-icon :icon="mdiBookmarkMultiple" color="#FFF9C4"/>
                <span class="text-[#FFF9C4] pl-2">Your Bookmarked Tasks</span>
            </v-list-item>
            <v-list-item
            v-for="(task, index) in bookmarkedTasks"
            class="hover:bg-red-300 hover:text-black group font-bold">
                {{ index + 1 }}: {{ task.name }}
                <v-divider thickness="3px"></v-divider>
            </v-list-item>
    </v-list>
    </v-row>
</v-container>
</template>

<style scoped>

</style>
