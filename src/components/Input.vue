<script setup>
import { ref } from "vue"
import { useLocalStorage, StorageSerializers } from '@vueuse/core'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAlertCircleOutline, mdiCheckboxMarkedCirclePlusOutline, mdiBookmarkOutline, mdiBookmark, mdiPlus, mdiTrashCanOutline, mdiMagnify } from '@mdi/js'
import { useAdd } from "../composables/add"

// const newTask = ref('');

const storeAllTasks = useLocalStorage('all', []);
const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

const { newTask, addTask } = useAdd();

</script>

<template>
<v-container fluid class="px-5 flex-1 p-0 m-0">
    <v-row>
        <v-text-field
        v-model="newTask"
        label="Add a new Task"
        variant="solo"
        color="brown"
        bg-color="white"
        class="mt-5 mx-5"
        @keypress.enter="addTask()"
        >
            <template #append-inner>
                <svg-icon type="mdi" :path="mdiPlus" @click.prevent="addTask()"/>
            </template>
        </v-text-field>
    </v-row>

</v-container>

</template>