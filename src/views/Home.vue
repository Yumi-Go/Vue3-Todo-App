<script setup>
import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBookmarkOutline, mdiBookmark, mdiPlus } from '@mdi/js'

const newTask = ref('');
let counter = 0;
// const allTasks = ref([]);
// const addLocal = useLocalStorage('all', JSON.stringify(allTasks.value));

const storeAllTasks = useLocalStorage('all', []);
const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

console.log(getAllTasks.value);
console.log(typeof getAllTasks.value);


const addTask = () => {
  const newId = 't' + ++counter;
  storeAllTasks.value.push({
    id: newId,
    name: newTask.value,
    bookmarked: false,
    completed: false,
  });
  // localStorage.setItem(newId, newTask.value);
  newTask.value = '';
}

const capitalize = (name) => {
  const firstLetter = name[0].toUpperCase();
  const rest = name.slice(1);
  return firstLetter + rest;
}

const completedTasks = () => {
  const result = [];
  storeAllTasks.value.map(obj => {
    if (obj.completed == true) {
      result.push(obj.id);
    }
  });
  return result;
}

const bookmarkedTasks = ref([]);

const bookmarkTask = (taskID) => {
  storeAllTasks.value.map(obj => {
    if (obj.id === taskID && !bookmarkedTasks.value.includes(taskID)) {
      obj.bookmarked = true;
      bookmarkedTasks.value.push(taskID);
    }
  });
}

const unBookmarkTask = (taskID) => {
  storeAllTasks.value.map(obj => {
    if (obj.id === taskID && bookmarkedTasks.value.includes(taskID)) {
      console.log("obj.id type: ", typeof obj.id);
      console.log("taskID type: ", typeof taskID);

      obj.bookmarked = false;
      bookmarkedTasks.value.splice(bookmarkedTasks.value.indexOf(taskID), 1);
    }
  });
}

const removeTask = (index) => {
  storeAllTasks.value.splice(index, 1);
}




// const path = ref('');
</script>

<template>

      <v-container fluid>

        <v-row>
          <p>for Check...</p>
        </v-row>
        <v-row>
          <p>==> New Task input: {{ newTask }}</p>
        </v-row>
        <v-row>
          <p>==> All tasks list</p>
          <li v-for="(task, index) in getAllTasks">
            Index: {{ index }} // ID: {{ task.id }} // Name: {{ task.name }} // Bookmarked: {{ task.bookmarked }} // Completed: {{ task.completed }}
          </li>
        </v-row>

        <v-row>
          ==> Bookmarked tasks's ID list: {{ bookmarkedTasks }}
        </v-row>

        <v-row>
          ==> Completed tasks's ID list: {{ completedTasks() }} 
        </v-row>

        <v-row>
          <v-list class="w-full h-[500px] m-0">
            <span v-if="getAllTasks.length === 0">0 task.. Add a task!</span>
            <span v-else>Your Tasks</span>
              <v-list-item v-for="(task) in getAllTasks">
                <v-list-item-action>
                  <v-checkbox v-model="task.completed">
                    <template #label v-if="task.completed"><span class="line-through"> {{ capitalize(task.name) }}</span></template>
                    <template #label v-else>{{ capitalize(task.name) }}</template>

                  </v-checkbox>
                  <v-icon v-if="task.bookmarked == true" :icon="mdiBookmark" @click="unBookmarkTask(task.id)" />
                  <v-icon v-else :icon="mdiBookmarkOutline" @click="bookmarkTask(task.id)" />
                </v-list-item-action>
              </v-list-item>
          </v-list>
        </v-row>
        <v-row>
          <v-text-field
          v-model="newTask"
          label="Add a new Task"
          variant="solo"
          class="mt-5 mx-5">
            <template #append-inner>
              <svg-icon type="mdi" :path="mdiPlus" @click.prevent="addTask"></svg-icon>
            </template>
          </v-text-field>

        </v-row>



      </v-container>




</template>

<style scoped>



</style>












