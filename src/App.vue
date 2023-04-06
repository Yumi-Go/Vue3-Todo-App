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
  isAllTasks.value = !isAllTasks.value;
  console.log('*** allTasksButtonToggle');
  console.log('changed isAllTasks: ', isAllTasks);
  console.log('changed isBookmarked: ', isBookmarked);
}

function bookmarkedButtonToggle() {
  isBookmarked.value = !isBookmarked.value;
  console.log('*** allBookmarkedButtonToggle');
  console.log('changed isAllTasks: ', isAllTasks);
  console.log('changed isBookmarked: ', isBookmarked);
}

// radio button
</script>

<template>

<div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">

<div class="flex flex-col">
  <div class="flex justify-between flex-row w-[600px] bg-red-200 px-5 py-2">
    <div class="todo w-[109px] h-[39px] bg-red-200" >TO-DO</div>
    <div class="flex flex-row">
      <div class="btn_all" :class="{ btn_clicked: isBookmarked }">
        <input type="radio" id="btn_allTasks" name="tabBtn" checked v-model="isAllTasks" class="hidden"/>
        <label for="btn_allTasks"><router-link :to="{ name: 'Home' }">{{ isAllTasks }}</router-link></label>
      </div>
      <div class="btn_bookmarked" :class="{ btn_clicked: isBookmarked }">
        <input type="radio" id="btn_bookmarked" name="tabBtn" v-model="isBookmarked" class="hidden"/>
        <label for="btn_bookmarked"><router-link :to="{ name: 'Bookmarked' }">{{ isBookmarked }}</router-link></label>
      </div>
    </div>
  </div>
  <div class="w-full bg-red-200">
    <router-view />
  </div>


</div>

<!-- <div class="flex justify-between w-[600px] bg-red-200 px-5 py-2">
  <div class="todo w-[109px] h-[39px] bg-red-200" >TO-DO</div>
    <div>
      <button :class="isAllTasks ? 'button_on' : 'button_off'" @click="allTasksButtonToggle()">
        <router-link :to="{ name: 'Home' }">{{ isAllTasks }}</router-link>
      </button>
      <button :class="isBookmarked ? 'button_on' : 'button_off'" @click="bookmarkedButtonToggle()">
        <router-link :to="{ name: 'Bookmarked' }">{{ isBookmarked }}</router-link>
      </button>
    </div>
</div>
<div class="w-[600px] bg-red-200">
  <router-view />
</div> -->

</div>







<!-- <div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">

    <div class="flex justify-between w-[600px] bg-red-200 px-5 py-2">
      <div class="todo w-[109px] h-[39px] bg-red-200" >TO-DO</div>
        <div class="">
          <button class="button_on">
            <router-link :to="{ name: 'Home' }">All Tasks</router-link>
          </button>
          <button class="button_off">
            <router-link :to="{ name: 'Bookmarked' }">Bookmarked</router-link>
          </button>
        </div>
    </div>
    <div class="w-[600px] bg-red-200">
      <router-view />
    </div>

</div> -->






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
  background: #E8DEF8;

}







</style>





