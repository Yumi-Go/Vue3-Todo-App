<script setup>

</script>


<template>
  <div>
    <router-link :to="{ name: 'Home' }" />|
    <!-- <router-link :to="{ name: 'AllTasks' }">All Tasks</router-link> |
    <router-link :to="{ name: 'Bookmarked' }">Bookmarked</router-link> -->
  </div>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>

</style>
