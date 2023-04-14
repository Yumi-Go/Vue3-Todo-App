<script setup>
import Header from '../src/components/Header.vue'
import Search from './components/Search.vue';
import { useTabStatus } from "./composables/tabStatus";

const { isAllTasks, isBookmarked, getTabStatus, saveTabStatus } = useTabStatus();

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

</script>

<template>
<div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">
  <div class="flex flex-col mt-10 w-[600px] bg-red-200">
    <Header/>
    <Search/>
  </div>

  <div class="w-full">

  </div>

</div>
</template>





