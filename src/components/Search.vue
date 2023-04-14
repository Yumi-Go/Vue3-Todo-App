<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
import { useSearch } from "../composables/search"

const { search } = useSearch();

</script>

<template>
<v-container fluid class="w-full m-0 px-5">
    <v-text-field
    v-model="search"
    label="Search"
    color="black"
    bg-color="#FFEBEE"
    single-line
    hide-details
    class="mb-1">
        <template #append-inner>
            <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
        </template>
    </v-text-field>
</v-container>
</template>