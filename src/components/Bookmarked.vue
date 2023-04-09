<script setup>
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { mdiBookmarkMultiple, mdiCheckBold, mdiBookmark, mdiBookmarkOutline, mdiTrashCanOutline } from '@mdi/js'

const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

function getBookmarkedTasks() {
    return getAllTasks.value.filter((obj) => obj.bookmarked);
}

const emit = defineEmits(['unBookmarkTask', 'deleteTask']);

</script>

<template>
<v-container fluid class="px-5 h-[660px]">
    <v-row>
        <v-list bg-color="pink" class="w-full h-[640px] m-0 text-white">
            <v-list-item v-if="getBookmarkedTasks().length < 1" class="font-bold">Bookmarked tasks list is empty!!</v-list-item>        
            <v-list-item v-else class="font-bold">
                <v-icon :icon="mdiBookmarkMultiple" color="#FFF9C4"/>
                <span class="text-[#FFF9C4] pl-2">Your Bookmarked Tasks</span>
            </v-list-item>
            <v-list-item
            v-for="task in getBookmarkedTasks()"
            class="hover:bg-red-300 hover:text-black font-bold pl-5 group">
            <div class="flex justify-between">
                <div>
                    <v-icon :icon="mdiCheckBold" class="mr-2"/>
                    {{ task.name }}
                </div>
                <div>
                    <v-icon v-if="task.bookmarked" :icon="mdiBookmark" @click="$emit('unBookmarkTask', task.id)"/>
                    <v-icon class="invisible group-hover:visible" :icon="mdiTrashCanOutline" @click="$emit('deleteTask', getAllTasks.indexOf(task))"/>
                </div>
            </div>

                <v-divider thickness="3px"></v-divider>
            </v-list-item>
        </v-list>
    </v-row>
</v-container>
</template>

<style scoped>

</style>
