<script setup>
import { useLocalStorage } from '@vueuse/core';
import { mdiAlertCircleOutline, mdiBookmarkMultiple, mdiCheckBold, mdiBookmark, mdiBookmarkOutline, mdiTrashCanOutline } from '@mdi/js'
import { useTabStatus } from "../composables/useTabStatus";
import { useSearch } from "../composables/useSearch"
import { useBookmark } from '../composables/useBookmark'
import { useDelete } from '../composables/useDelete'

const allTasks = useLocalStorage("all", []);
const { getBookmarkedTasks, unBookmarkTask } = useBookmark();
const { filteredTasks } = useSearch();
const { deleteTask } = useDelete();

</script>

<template>
    <v-container fluid class="flex flex-col flex-1 px-5">
        <v-row>
            <v-list
                bg-color="pink"
                class="w-full flex-1 m-0 text-white"
            >
                <v-list-item
                    v-if="getBookmarkedTasks().length < 1"
                    class="font-bold"
                >
                    <div class="flex flex-col justify-center items-center h-[500px]">
                        <div>
                            <v-icon
                                :icon="mdiAlertCircleOutline"
                                color="#E0E0E0"
                                size="100"
                                class="opacity-50"
                            />
                        </div>
                        <div>
                            <span class="text-[#E0E0E0] opacity-80">
                                Bookmarked Task Does Not Exist
                            </span>
                        </div>
                    </div>
                </v-list-item>        
                <v-list-item
                    v-else
                    class="font-bold"
                >
                    <v-icon
                        :icon="mdiBookmarkMultiple"
                        color="#FFF9C4"
                    />
                    <span class="text-[#FFF9C4] pl-2">
                        Your Bookmarked Tasks
                    </span>
                </v-list-item>
                <v-list-item
                    v-for="(task, index) in filteredTasks(getBookmarkedTasks())"
                    class="hover:bg-red-300 hover:text-black font-bold pl-5 group"
                >
                    <div class="flex justify-between">
                        <div>
                            <v-icon
                                :icon="mdiCheckBold"
                                class="mr-2"
                            />
                            {{ task.name }}
                        </div>
                        <div>
                            <v-icon
                                v-if="task.bookmarked"
                                :icon="mdiBookmark"
                                @click="unBookmarkTask(index)"
                            />
                            <v-icon
                                class="invisible group-hover:visible"
                                :icon="mdiTrashCanOutline"
                                @click="deleteTask(index)"
                            />
                        </div>
                    </div>
                    <v-divider thickness="3px"/>
                </v-list-item>
            </v-list>
        </v-row>
    </v-container>
</template>