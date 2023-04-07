<script setup>
import { ref } from "vue";
// let isActive = ref(false);

// const activeStatus = () => {
//   isActive = !isActive;
//   console.log(isActive);
// }

let isAllTasks = ref(true);
console.log("isAllTasks: ", isAllTasks.value);

let isBookmarked = ref(false);
console.log("isBookmarked: ", isBookmarked.value);

function allTasksButtonToggle() {
  isAllTasks.value = true;
  isBookmarked.value = false;


  console.log('*** allTasksButtonToggle');
  console.log('changed isAllTasks: ', isAllTasks.value);
  console.log('changed isBookmarked: ', isBookmarked.value);
}

function bookmarkedButtonToggle() {
  isAllTasks.value = false;
  isBookmarked.value = true;

  console.log('*** allBookmarkedButtonToggle');
  console.log('changed isAllTasks: ', isAllTasks.value);
  console.log('changed isBookmarked: ', isBookmarked.value);
}

// radio button
</script>

<template>

<div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">

  <div class="flex flex-col">
    <div class="flex justify-between flex-row w-[600px] bg-red-200 px-5 py-2">
      <div class="todo w-[109px] h-[39px] bg-red-200" >TO-DO</div>
      <div class="flex flex-row">
        <router-link :to="{ name: 'Home' }">
          <div class="btn_all justify-center items-center" :class="{ btn_clicked: isAllTasks }">
            <input type="radio" id="btn_allTasks" name="tabBtn" v-model="isAllTasks" class="" @click="allTasksButtonToggle"/>
            <label for="btn_allTasks">{{ isAllTasks }}</label>
          </div>
        </router-link>
        <router-link :to="{ name: 'Bookmarked' }">
          <div class="btn_bookmarked" :class="{ btn_clicked: isBookmarked }">
            <input type="radio" id="btn_bookmarked" name="tabBtn" v-model="isBookmarked" class="" @click="bookmarkedButtonToggle"/>
            <label for="btn_bookmarked">{{ isBookmarked }}</label>
          </div>
      </router-link>
      </div>
    </div>
    <div class="w-full bg-red-200">
      <router-view />
    </div>
  </div>
</div>




</template>



<style>

.todo {
border-radius: nullpx;
font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;

color: #000000;

}

.btn_all {
    padding: 0px;
    width: 118px;
    height: 40px;
    border: 1px solid #79747E;
    border-radius: 100px 0px 0px 100px;
}

.btn_bookmarked {
    padding: 0px;
    width: 118px;
    height: 40px;
    border: 1px solid #79747E;
    border-left: 0px;
    border-radius: 0px 100px 100px 0px;
}

.btn_clicked {
  font-weight: bold;
  background: #FFE0B2;
  padding: 0px;


}







</style>





