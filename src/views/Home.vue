<script setup>
import { ref } from "vue";
import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBookmarkOutline, mdiPlus } from '@mdi/js'

const newTask = ref('');
let counter = 0;
const tasks = ref([]);

const addTask = () => {
  tasks.value.push({
    id: counter++,
    name: newTask.value,
    bookmarked: false,
    completed: false,
    checked: false,
  });
  newTask.value = '';
}

const capitalize = (name) => {
  const firstLetter = name[0].toUpperCase();
  const rest = name.slice(1);
  return firstLetter + rest;
}


const removeTask = (index) => {
  todos.value.splice(index, 1);
}




const path = ref('');
</script>

<template>
<div class="relative w-full h-full bg-red-600">
  <!-- <div class="absolute w-[600px] h-[800px] top-1/2	left-1/2 -mt-[400px] mr-0 mb-0 -ml-[300px] bg-gray-300"> -->
    <div class="absolute w-[600px] h-[800px]  bg-gray-300">
    <div class="flex flex-row mb-6 bg-sky-400">
      <div class="todo w-[109px] h-[39px] bg-red-300" >TO-DO</div>
      <div class="button_on">All tasks</div>
      <div class="button_off">Bookmarked</div>
    </div>
    <div class="bg-pink-400">
      <v-container fluid>
        <p>{{ newTask }}</p>
        <v-row>
          <v-checkbox color="black" value="task1">
            <template #label>{{ newTask }}</template>
          </v-checkbox>
          <v-icon :icon="mdiBookmarkOutline" />
        </v-row>
        <v-row>
          <li v-for="(task, index) in tasks">
            New task: {{ newTask }} // Index: {{ index }} // ID: {{ task.id }} // Task Name: {{ task.name }}
          </li>
        </v-row>

        <v-row>
          <v-list class="w-full h-[500px] m-0">
            <span v-if="tasks.length == 0">Add a task</span>
            <span v-else>Your Tasks</span>
              <v-list-item v-for="(task, index) in tasks">
                <v-list-item-action>
                  <v-checkbox v-model="task.checked">
                    <template #label>{{ capitalize(task.name) }}</template>
                  </v-checkbox>
                </v-list-item-action>
              </v-list-item>
          </v-list>
        </v-row>
        <v-row>
          <v-text-field
          v-model="newTask"
          label="Add a new Task"
          variant="solo"
          class="m-5">
            <template #append-inner>
              <svg-icon type="mdi" :path="mdiPlus" @click.prevent="addTask"></svg-icon>
            </template>
          </v-text-field>

        </v-row>



      </v-container>





        <AllTasks />
        <Bookmarked />
    </div>
  </div>
</div>

</template>

<style scoped>

.todo {

    /* height: 39px; */
/* width: 109px; */
/* left: 340px; */
/* top: 29px; */
border-radius: nullpx;


    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;


color: #000000;







}
.button_on {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 118px;
    height: 40px;

    background: #E8DEF8;

    border: 1px solid #79747E;
    border-radius: 100px 0px 0px 100px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
}

.button_off {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 118px;
    height: 40px;

    border: 1px solid #79747E;
    border-left: 0px;
    border-radius: 0px 100px 100px 0px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;


}
</style>
