<script setup>
import Home from '../src/views/Home.vue'
</script>

<template>


<div id="outerWrapper" class="flex flex-col justify-center items-center w-full h-full">

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

</div>






<!-- <div id="outerWrapper" class="flex justify-center items-center w-full h-full">

  <div class="w-[600px] bg-gray-300">
      <div class="flex justify-between bg-sky-400">
        <div class="todo w-[109px] h-[39px] bg-red-300" >TO-DO</div>
        <div class="">
          <button class="button_on">
            <router-link :to="{ name: 'Home' }">All Tasks</router-link>
          </button>
          <button class="button_off">
            <router-link :to="{ name: 'Bookmarked' }">Bookmarked</router-link>
          </button>
        </div>
      </div>
      <router-view />
  </div>

</div> -->












<!-- <Home /> -->
</template>



<style>

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
    /* box-sizing: border-box; */

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    padding: 0px;

    width: 118px;
    height: 40px;

    background: #E8DEF8;

    border: 1px solid #79747E;
    border-radius: 100px 0px 0px 100px;

    /* flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1; */
}

.button_off {
    /* box-sizing: border-box; */

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    padding: 0px;

    width: 118px;
    height: 40px;

    border: 1px solid #79747E;
    border-left: 0px;
    border-radius: 0px 100px 100px 0px;

    /* flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1; */


}









</style>





