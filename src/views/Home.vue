<script setup>
import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBookmarkOutline, mdiBookmark, mdiPlus, mdiTrashCanOutline, mdiMagnify } from '@mdi/js'

const newTask = ref('');
const search = ref('');

const storeAllTasks = useLocalStorage('all', []);
const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

const counter = () => {
  let result = 1;
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    console.log(getAllTasks.value[getAllTasks.value.length - 1].id);
    result = getAllTasks.value[getAllTasks.value.length - 1].id + 1;
  }
  return result;
}

console.log(getAllTasks.value);
console.log(typeof getAllTasks.value);

const addTask = () => {
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

const completedTasks = () => {
  const result = [];
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.map(obj => {
      if (obj.completed) {
        result.push(obj.id);
      }
    });
  }
  return result;
}

const bookmarkedTasks = () => {
  const result = [];
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.map(obj => {
      if (obj.bookmarked) {
        result.push(obj.id);
      }
    });
  }
  return result;
}

const bookmarkTask = (taskID) => {
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.map(obj => {
      if (obj.id === taskID && !bookmarkedTasks().includes(taskID)) {
        obj.bookmarked = true;
      }
    });
  }
}

const unBookmarkTask = (taskID) => {
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.map(obj => {
      if (obj.id === taskID && bookmarkedTasks().includes(taskID)) {
        console.log("obj.id type: ", typeof obj.id);
        console.log("taskID type: ", typeof taskID);
        obj.bookmarked = false;
        bookmarkedTasks().splice(bookmarkedTasks().indexOf(taskID), 1);
      }
    });
  }
}

const deleteTask = (index) => {
  // if (getAllTasks.value != null) {
  if (getAllTasks.value.length > 0) {
    getAllTasks.value.splice(index, 1);
  }
}


// const temp = [];
// setTimeout(() => temp.value = taskNames());



// const taskNames = () => {
//   const result = [];
//   if (getAllTasks.value.length > 0) {
//     getAllTasks.value.map(obj => {
//       result.push(obj.name);
//     });
//   }
//   return result;
// }

const filteredTasks = () => {
  let input = search.value.toLowerCase();
	return getAllTasks.value.filter((obj) => {
    return obj.name.toLowerCase().match(input)
  });
}


// console.log(filteredTasks()); // for check


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
          ==> Bookmarked tasks's ID list: {{ bookmarkedTasks() }}
        </v-row>

        <v-row>
          ==> Completed tasks's ID list: {{ completedTasks() }} 
        </v-row>


        <v-row>

          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
          >
          <template #append-inner>
            <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
          </template>
        </v-text-field>

        </v-row>

        <v-row>
          <v-list bg-color="yellow" class="w-full h-[500px] m-0">
            <span v-if="getAllTasks.length < 1">0 task.. Add a task!</span>
            <span v-else>Your Tasks</span>
            <v-list-item
            v-for="(task, i) in filteredTasks()"
            :key="i"
            class="hover:bg-red-400 group"
            >
              <!-- <v-list-item-title>{{task.name}}</v-list-item-title> -->


              <v-list-item-action>
                  <v-checkbox v-model="task.completed">
                    <template #label v-if="task.completed"><span class="line-through"> {{ task.name }}</span></template>
                    <template #label v-else>{{ task.name }}</template>
                  </v-checkbox>
                  <v-icon v-if="task.bookmarked" :icon="mdiBookmark" @click="unBookmarkTask(task.id)" />
                  <v-icon v-else :icon="mdiBookmarkOutline" @click="bookmarkTask(task.id)" />
                  <v-icon class="invisible group-hover:visible" :icon="mdiTrashCanOutline" @click="deleteTask(getAllTasks.indexOf(task))"></v-icon>

                </v-list-item-action>





            </v-list-item>
          </v-list>
          <!-- <v-list :items="filteredTasks()" bg-color="red" class="w-full m-0">
          </v-list> -->
        </v-row>













        <!-- <v-row>
          <v-list class="w-full h-[500px] m-0">
            <span v-if="getAllTasks.length < 1">0 task.. Add a task!</span>
            <span v-else>Your Tasks</span>
              <v-list-item v-for="(task) in getAllTasks" class="hover:bg-red-100 group">
                <v-list-item-action>
                  <v-checkbox v-model="task.completed">
                    <template #label v-if="task.completed"><span class="line-through"> {{ task.name }}</span></template>
                    <template #label v-else>{{ task.name }}</template>
                  </v-checkbox>
                  <v-icon v-if="task.bookmarked" :icon="mdiBookmark" @click="unBookmarkTask(task.id)" />
                  <v-icon v-else :icon="mdiBookmarkOutline" @click="bookmarkTask(task.id)" />
                  <v-icon class="invisible group-hover:visible" :icon="mdiTrashCanOutline" @click="deleteTask(getAllTasks.indexOf(task))"></v-icon>

                </v-list-item-action>
              </v-list-item>
          </v-list>
        </v-row>
        <v-row>
          <v-text-field
          v-model="newTask"
          label="Add a new Task"
          variant="solo"
          class="mt-5 mx-5"
          @keypress.enter.preventDefault="addTask()"
          >
            <template #append-inner>
              <svg-icon type="mdi" :path="mdiPlus" @click.prevent="addTask()"></svg-icon>
            </template>
          </v-text-field>

        </v-row> -->













      </v-container>




</template>

<style scoped>



</style>












