import { ref } from "vue";
import { useLocalStorage } from '@vueuse/core';

const isAllTasks = ref(true);  
const isBookmarked = ref(false);
const tabStatus = useLocalStorage('tab', { allTab: isAllTasks.value, bookmarkedTab: isBookmarked.value });

export function useTabStatus() {

    function saveTabStatus() {
        tabStatus.value.allTab = isAllTasks.value;
        tabStatus.value.bookmarkedTab = isBookmarked.value;
    }

    function allTasksButtonToggle() {
        isAllTasks.value = true;
        isBookmarked.value = false;
        saveTabStatus();
    }

    function bookmarkedButtonToggle() {
        isAllTasks.value = false;
        isBookmarked.value = true;
        saveTabStatus();
    }

    return {
        isAllTasks,
        isBookmarked,
        tabStatus,
        saveTabStatus,
        allTasksButtonToggle,
        bookmarkedButtonToggle
    }

}