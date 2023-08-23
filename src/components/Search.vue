<script setup>
import { ref } from "vue";

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
import { useSearch } from "../composables/useSearch"

const { search } = useSearch();

</script>

<template>
    <v-container fluid class="flex justify-center items-center px-5">
        <v-row>
            <v-text-field
                v-model="search"
                label="Search"
                color="black"
                bg-color="#FFEBEE"
                single-line
                hide-details
                class="mb-1">
                <template #append-inner>
                    <svg-icon type="mdi" :path="mdiMagnify"/>
                </template>
            </v-text-field>
        </v-row>
    </v-container>
</template>