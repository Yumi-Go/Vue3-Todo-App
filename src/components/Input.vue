<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlus } from '@mdi/js'
import { useAdd } from "../composables/useAdd"

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
                    <svg-icon
                        type="mdi"
                        :path="mdiPlus"
                        @click.prevent="addTask()"
                    />
                </template>
            </v-text-field>
        </v-row>
    </v-container>
</template>