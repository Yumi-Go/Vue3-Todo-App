<script setup>
import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAlertCircleOutline, mdiCheckboxMarkedCirclePlusOutline, mdiBookmarkOutline, mdiBookmark, mdiPlus, mdiTrashCanOutline, mdiMagnify } from '@mdi/js'
import Bookmarked from "../components/Bookmarked.vue"

const getTabStatus = useLocalStorage("tab", null, { serializer: StorageSerializers.object });

function getCurrentTab() {
    return Object.keys(getTabStatus.value).find((tab) => getTabStatus.value[tab]);
}

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

function bookmarkedTasks() {
    const bookmarkedObj = getAllTasks.value.filter((obj) => obj.bookmarked);
    return bookmarkedObj.map(obj => obj.id);
}

function bookmarkTask(taskID) {
    Object.values(getAllTasks.value).forEach(task => {
        if (task.id === taskID && !bookmarkedTasks().includes(taskID)) {
            task.bookmarked = true;
        }
    });
}

function unBookmarkTask(taskID) {
    Object.values(getAllTasks.value).forEach(task => {
        if (task.id === taskID && bookmarkedTasks().includes(taskID)) {
            task.bookmarked = false;
            bookmarkedTasks().splice(bookmarkedTasks().indexOf(taskID), 1);
        }
    });
}

function deleteTask(index) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.splice(index, 1);
  }
}

function filteredTasks() {
  let input = search.value.toLowerCase();
	return getAllTasks.value.filter((obj) => {
    return obj.name.toLowerCase().match(input);
  });
}

</script>

<template>

<Bookmarked v-if="getCurrentTab() === 'bookmarkedTab'"
@unBookmarkTask="unBookmarkTask"
@deleteTask="deleteTask"
/>

<v-container v-else fluid class="px-5 h-[660px]">
    <v-row>
      <v-text-field
        v-model="search"
        label="Search"
        color="black"
        bg-color="#FFEBEE"
        single-line
        hide-details
        class="mb-1"
      >
      <template #append-inner>
        <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
      </template>
    </v-text-field>

    </v-row>

    <v-row>
        <v-list bg-color="pink" class="w-full h-[500px] m-0 text-white">
            <v-list-item v-if="getAllTasks.length < 1" class="p-5 font-bold">
                <div class="flex flex-col justify-center items-center h-[500px]">
                    <div>
                        <v-icon :icon="mdiAlertCircleOutline" color="#E0E0E0" size="100" class="opacity-50"/>
                    </div>
                    <div>
                        <span class="text-[#E0E0E0] opacity-80">Task Does Not Exist</span>
                    </div>
                </div>
            </v-list-item>
            <v-list-item v-else class="font-bold">
                <v-icon :icon="mdiCheckboxMarkedCirclePlusOutline" color="#FFF9C4"/>
                <span class="text-[#FFF9C4] pl-2">Your Tasks</span>
            </v-list-item>
            <v-list-item
            v-for="task in filteredTasks()"
            class="hover:bg-red-300 hover:text-black group"
            >
                <v-list-item-action>
                    <v-checkbox v-model="task.completed">
                        <template #label v-if="task.completed">
                            <span class="line-through font-bold"> {{ task.name }}</span>
                        </template>
                        <template #label v-else>
                            <span class="font-bold">{{ task.name }}</span>
                        </template>
                    </v-checkbox>
                    <v-icon v-if="task.bookmarked" :icon="mdiBookmark" @click="unBookmarkTask(task.id)"/>
                    <v-icon v-else :icon="mdiBookmarkOutline" @click="bookmarkTask(task.id)"/>
                    <v-icon class="invisible group-hover:visible" :icon="mdiTrashCanOutline" @click="deleteTask(getAllTasks.indexOf(task))"/>
                </v-list-item-action>
                <v-divider thickness="3px"></v-divider>
            </v-list-item>
        </v-list>
    </v-row>
    <v-row>
        <v-text-field
        v-model="newTask"
        label="Add a new Task"
        variant="solo"
        color="brown"
        bg-color="white"
        class="mt-5 mx-5"
        @keypress.enter.preventDefault="addTask()"
        >
            <template #append-inner>
                <svg-icon type="mdi" :path="mdiPlus" @click.prevent="addTask()"/>
            </template>
        </v-text-field>
    </v-row>

</v-container>

</template>

<style scoped>

</style>
