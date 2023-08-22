<script setup>
import { useTabStatus } from "../composables/useTabStatus";
const { isAllTasks, isBookmarked, tabStatus, allTasksButtonToggle, bookmarkedButtonToggle } = useTabStatus();

</script>

<template>
    <div class="flex justify-between flex-row w-full px-5 pt-5 pb-2">
      <div class="w-[109px] h-[39px] text-red-700 text-left text-[32px] font-[700] leading-[39px] tracking-normal" >
        TO-DO
      </div>
      <div class="flex flex-row">
        <div
          class="flex justify-center items-center p-0 w-[118px] h-10 border-[1px] border-solid border-[#757575] rounded-l-full"
          :class="{ btn_clicked: tabStatus.allTab }"
          @click="allTasksButtonToggle"
        >
          <input type="radio" id="btn_allTasks" name="tabBtn" v-model="isAllTasks" class="hidden"/>
          <label for="btn_allTasks" class="text-center cursor-pointer">
            All Tasks
          </label>
        </div>
        <div
          class="flex justify-center items-center p-0 w-[118px] h-10 border-[1px] border-solid border-[#757575] !border-l-0 rounded-r-full"
          :class="{ btn_clicked: tabStatus.bookmarkedTab }"
          @click="bookmarkedButtonToggle"
        >
          <input type="radio" id="btn_bookmarked" name="tabBtn" v-model="isBookmarked" class="hidden"/>
          <label for="btn_bookmarked" class="text-center cursor-pointer">
            Bookmarked
          </label>
        </div>
      </div>
    </div>
</template>

<style>

.btn_clicked {
  font-weight: bold;
  background: #FFF3E0;
  color: rgb(185 28 28);
}

</style>





