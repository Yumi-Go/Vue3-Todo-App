<script setup>
import { useLocalStorage } from '@vueuse/core'
import {
    mdiAlertCircleOutline,
    mdiCheckboxMarkedCirclePlusOutline,
    mdiBookmarkOutline,
    mdiBookmark,
    mdiTrashCanOutline
} from '@mdi/js'
import { useTabStatus } from "../composables/useTabStatus";
import { useSearch } from "../composables/useSearch"
import { useBookmark } from '../composables/useBookmark'
import { useDelete } from '../composables/useDelete'

const allTasks = useLocalStorage("all", []);
const { tabStatus } = useTabStatus();
const { filteredTasks } = useSearch();
const { bookmarkTask, unBookmarkTask } = useBookmark();
const { deleteTask } = useDelete();
</script>

<template>
    <v-container fluid class="flex flex-col justify-center items-center px-2 py-0">
        <v-list
            bg-color="pink"
            class="w-full h-[500px]
            text-white"
        >
            <v-list-item
                v-if="allTasks.length < 1"
                class="p-5 font-bold"
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
                            Task Does Not Exist
                        </span>
                    </div>
                </div>
            </v-list-item>
            <v-list-item
                v-else
                class="font-bold"
            >
                <v-icon
                    :icon="mdiCheckboxMarkedCirclePlusOutline"
                    color="#FFF9C4"
                />
                <span class="text-[#FFF9C4] pl-2">
                    Your Tasks
                </span>
            </v-list-item>
            <v-list-item
                v-for="task in filteredTasks(allTasks)"
                class="hover:bg-red-300 hover:text-black group"
            >
                <v-list-item-action>
                    <v-checkbox v-model="task.completed">
                        <template #label>
                            <span
                                class="font-bold"
                                :class="{ 'line-through': task.completed }"
                            >
                                {{ task.name }}
                            </span>
                        </template>
                    </v-checkbox>
                    <v-icon
                        v-if="task.bookmarked"
                        :icon="mdiBookmark"
                        @click="unBookmarkTask(task.id)"
                    />
                    <v-icon
                        v-else
                        :icon="mdiBookmarkOutline"
                        @click="bookmarkTask(task.id)"
                    />
                    <v-icon
                        class="invisible group-hover:visible"
                        :icon="mdiTrashCanOutline"
                        @click="deleteTask(task.id)"
                    />
                </v-list-item-action>
                <v-divider thickness="3px"></v-divider>
            </v-list-item>
        </v-list>
    </v-container>
</template>