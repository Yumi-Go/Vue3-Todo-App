<script setup>
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { mdiAlertCircleOutline, mdiBookmarkMultiple, mdiCheckBold, mdiBookmark, mdiBookmarkOutline, mdiTrashCanOutline } from '@mdi/js'
import { useBookmark } from '../composables/bookmark'
import { useDelete } from '../composables/delete'

const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

function getBookmarkedTasks() {
    return getAllTasks.value.filter((obj) => obj.bookmarked);
}

const { unBookmarkTask } = useBookmark();
const { deleteTask } = useDelete();

</script>

<template>
<v-container fluid class="px-5 h-[660px]">
    <v-row>
        <v-list bg-color="pink" class="w-full h-[640px] m-0 text-white">
            <v-list-item v-if="getBookmarkedTasks().length < 1" class="font-bold">
                <div class="flex flex-col justify-center items-center h-[500px]">
                    <div>
                        <v-icon :icon="mdiAlertCircleOutline" color="#E0E0E0" size="100" class="opacity-50"/>
                    </div>
                    <div>
                        <span class="text-[#E0E0E0] opacity-80">Bookmarked Task Does Not Exist</span>
                    </div>
                </div>
            </v-list-item>        
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
                    <v-icon v-if="task.bookmarked" :icon="mdiBookmark" @click="unBookmarkTask(task.id)"/>
                    <v-icon
                    class="invisible group-hover:visible"
                    :icon="mdiTrashCanOutline"
                    @click="deleteTask(getAllTasks.indexOf(task))"
                    />
                </div>
            </div>
                <v-divider thickness="3px"></v-divider>
            </v-list-item>
        </v-list>
    </v-row>
</v-container>
</template>
