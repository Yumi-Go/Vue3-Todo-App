<script setup>
import { ref } from "vue";
import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'

const task = ref('first');
function addTask(newTask) {
    task.value = newTask;
}
</script>

<template>
<div class="w-[1280px] h-[832px] absolute left-0 top-0  bg-yellow-300">
    <div class="w-[600px] h-[648px] absolute left-[340px] top-[29px] bg-[#79F193]">
        <div class="flex flex-row mb-6 bg-sky-400">
            <div class="todo w-[109px] h-[39px] bg-red-300" >TO-DO</div>
            <div class="button_on">All tasks</div>
            <div class="button_off">Bookmarked</div>   
        </div>
        <div class="bg-pink-400">
            <v-container fluid>
    <p>{{ task }}</p>
    <v-row>
        <v-col cols="12" sm="4" md="4">
            <v-checkbox v-model="task" label="task1" color="black" value="task1"></v-checkbox>
            <v-checkbox v-model="task" label="task2" color="black" value="task2"></v-checkbox>
        </v-col>
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
