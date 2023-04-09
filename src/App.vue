<script setup>
import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const isAllTasks = ref(true);
const isBookmarked = ref(false);

const storeTabStatus = useLocalStorage('tab', { allTab: isAllTasks.value, bookmarkedTab: isBookmarked.value });
const getTabStatus = useLocalStorage("tab", null, { serializer: StorageSerializers.object });

function saveTabStatus() {
  storeTabStatus.value.allTab = isAllTasks.value;
  storeTabStatus.value.bookmarkedTab = isBookmarked.value;
}

function initializeTabStatus() {
  if (window.location.href.match('/bookmarked')) {
    isAllTasks.value = false;
    isBookmarked.value = true;
  } else {
    isAllTasks.value = true;
    isBookmarked.value = false;
  }
  saveTabStatus();
}

initializeTabStatus();

function allTasksButtonToggle() {
  isAllTasks.value = true;
  isBookmarked.value = false;
  saveTabStatus();
}

function bookmarkedButtonToggle() {
  isAllTasks.value = false;
  isBookmarked.value = true;
  saveTabStatus();
}

</script>

<template>
<div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">
  <div class="flex flex-col mt-10 w-[600px]">
    <div class="flex justify-between flex-row w-full bg-red-200 px-5 pt-5 pb-2">
      <div class="w-[109px] h-[39px] text-red-700 text-left text-[32px] font-[700] leading-[39px] tracking-normal" >TO-DO</div>
      <div class="flex flex-row">
        <router-link :to="{ name: 'Home' }">
          <div class="btn_all flex justify-center items-center" :class="{ btn_clicked: getTabStatus.allTab }" @click="allTasksButtonToggle">
            <input type="radio" id="btn_allTasks" name="tabBtn" v-model="isAllTasks" class="hidden"/>
            <label for="btn_allTasks" class="text-center cursor-pointer">All Tasks</label>
          </div>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <div class="btn_bookmarked flex justify-center items-center" :class="{ btn_clicked: getTabStatus.bookmarkedTab }" @click="bookmarkedButtonToggle">
            <input type="radio" id="btn_bookmarked" name="tabBtn" v-model="isBookmarked" class="hidden"/>
            <label for="btn_bookmarked" class="text-center cursor-pointer">Bookmarked</label>
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
  background: #FFF3E0;
  padding: 0px;
  color: rgb(185 28 28);
}

</style>





