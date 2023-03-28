<script setup>
import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'

</script>

<template>
<div class="flex flex-row">
    <div>TO-DO</div>
    <div class="button_on">On</div>
    <div class="button_off">Off</div>
    
</div>
<div>
    <AllTasks />
    <Bookmarked />
</div>

</template>

<style scoped>
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
