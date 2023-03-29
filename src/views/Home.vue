<script setup>
import { ref } from "vue";
import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBookmarkOutline, mdiPlus } from '@mdi/js'

const newTask = ref('');
const tasks = [];
const isTaskExist = false;
function addTask() {
    this.isTaskExist = false;
    const value = newTask && newTask.trim();
    if (!value) {
        return;
    }
    const isTaskExist = this.tasks.find((task) => task.title === value);
    if (!isTaskExist) {
        this.tasks.push({
            title: this.newTask,
            done: false,
        });
        this.newTask = "";
    }
    if (isTaskExist) {
        this.isTaskExist = true;
    }


}

const path = ref('');
</script>

<template>
<div class="w-[1280px] h-[832px] left-0 top-0  bg-yellow-300">
    <div class="w-[600px] h-[648px] left-[340px] top-[29px] bg-[#79F193]">
        <div class="flex flex-row mb-6 bg-sky-400">
            <div class="todo w-[109px] h-[39px] bg-red-300" >TO-DO</div>
            <div class="button_on">All tasks</div>
            <div class="button_off">Bookmarked</div>   
        </div>
        <div class="bg-pink-400">
            <v-container fluid>
                <p>{{ task }}</p>
                <v-row>
                    <v-checkbox v-model="newTask" label="task1" color="black" value="task1" />
                    <v-icon :icon="mdiBookmarkOutline" />
                </v-row>
                <v-row>
                    <v-checkbox v-model="newTask" label="task2" color="black" value="task2" />
                    <v-icon :icon="mdiBookmarkOutline" />

                </v-row>

                <v-row>
                    <!-- <v-list lines="three" select-strategy="classic"> -->

      <!-- <v-list-item value="">
        <template v-slot:prepend="{ isActive }">

          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>Notifications</v-list-item-title>

        <v-list-item-subtitle>
          Notify me about updates to apps or games that I downloaded
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item value="sound">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>Sound</v-list-item-title>

        <v-list-item-subtitle>
          Auto-update apps at any time. Data charges may apply
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item value="widgets">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>Auto-add widgets</v-list-item-title>

        <v-list-item-subtitle>
          Automatically add home screen widgets when downloads complete
        </v-list-item-subtitle>
      </v-list-item>
    </v-list> -->






                    <!-- <v-list-item> -->
                        <!-- <v-list-item-content>
                          <v-list-item-title> -->
                            <v-text-field
                            label="Add a new Task"
                            variant="solo"
                            class="m-5">


                                <template #append-inner>
                                    <svg-icon type="mdi" :path="mdiPlus"></svg-icon>
                                </template>
                            </v-text-field>
                        <!-- </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item> -->







                </v-row>
                <svg-icon type="mdi" :path="path"></svg-icon>

            </v-container>


  <!-- <svg-icon type="mdi" :path="path"></svg-icon> -->
  


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
