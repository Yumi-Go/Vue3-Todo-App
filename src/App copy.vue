<script setup>
  import Home from '../src/views/Home.vue'

</script>

<template>

<div id="outerWrapper">
  <div id="nav">
    <div class="relative w-full h-full bg-red-600">
    <!-- <div class="absolute w-[600px] h-[800px] top-1/2	left-1/2 -mt-[400px] mr-0 mb-0 -ml-[300px] bg-gray-300"> -->
      <div class="absolute w-[600px] h-[800px]  bg-gray-300">

        <div class="flex flex-row mb-6 bg-sky-400">
          <div class="todo w-[109px] h-[39px] bg-red-300" >TO-DO</div>
          <div class="button_on">
            <router-link :to="{ name: 'AllTasks' }">All Tasks</router-link>
          </div>
          <div class="button_off">
            <router-link :to="{ name: 'Bookmarked' }">Bookmarked</router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>

</div>
</template>

<style>

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
