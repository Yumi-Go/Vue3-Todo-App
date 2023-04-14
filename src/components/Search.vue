<script setup>
import { ref } from "vue"
import { useLocalStorage, StorageSerializers } from '@vueuse/core'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAlertCircleOutline, mdiCheckboxMarkedCirclePlusOutline, mdiBookmarkOutline, mdiBookmark, mdiPlus, mdiTrashCanOutline, mdiMagnify } from '@mdi/js'
import { useBookmark } from '../composables/bookmark'
import { useDelete } from '../composables/delete'

const newTask = ref('');
const search = ref('');

const storeAllTasks = useLocalStorage('all', []);
const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

function counter() {
    let result = 1;
    if (getAllTasks.value.length > 0) {
        result = getAllTasks.value[getAllTasks.value.length - 1].id + 1;
    }
    return result;
}

function addTask() {
    if (newTask.value.trim().length > 0) {
        storeAllTasks.value.push({
            id: counter(),
            name: newTask.value,
            bookmarked: false,
            completed: false,
        });
    }
    newTask.value = '';
}

const { bookmarkTask, unBookmarkTask } = useBookmark();
const { deleteTask } = useDelete();

function filteredTasks() {
  let input = search.value.toLowerCase();
	return getAllTasks.value.filter(obj => obj.name.toLowerCase().match(input));
}

</script>

<template>
<v-container fluid class="px-5 h-[660px]">
    <v-row>
        <v-text-field
        v-model="search"
        label="Search"
        color="black"
        bg-color="#FFEBEE"
        single-line
        hide-details
        class="mb-1">
            <template #append-inner>
                <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
            </template>
        </v-text-field>
    </v-row>
</v-container>
</template>