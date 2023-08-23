<script setup>
import Header from '../src/components/Header.vue'
import Search from './components/Search.vue';
import AllTasksList from './components/AllTasksList.vue';
import BookmarkedList from './components/BookmarkedList.vue';
import Input from './components/Input.vue';
import { useTabStatus } from "./composables/useTabStatus";

const { tabStatus } = useTabStatus();
</script>

<template>
  <div
    id="outerWrapper"
    class="flex justify-center items-center w-full h-full"
  >
    <div class="flex flex-col mt-10 w-[600px] h-[750px] bg-red-200">
      <Header/>
      <Search/>
      <AllTasksList v-if="tabStatus.allTab"/>
      <BookmarkedList v-else/>
      <Input v-if="tabStatus.allTab"/>
    </div>
  </div>
</template>
