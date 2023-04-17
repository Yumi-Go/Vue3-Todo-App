import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';


const isAllTasks = ref(true);  
const isBookmarked = ref(false);
const storeTabStatus = useLocalStorage('tab', { allTab: isAllTasks.value, bookmarkedTab: isBookmarked.value });
const getTabStatus = useLocalStorage("tab", null, { serializer: StorageSerializers.object });

export function useTabStatus() {

    function saveTabStatus() {
        storeTabStatus.value.allTab = isAllTasks.value;
        storeTabStatus.value.bookmarkedTab = isBookmarked.value;
    }

// Question: Why this is not working??????????????

    // function tabToggle() {
    //     console.log("tabToggle triggered")
    //     isAllTasks.value = !isAllTasks.value;
    //     console.log("isAllTasks: ", isAllTasks.value);
    //     isBookmarked.value = !isBookmarked.value;
    //     console.log("isBookmarked: ", isBookmarked.value);
    //     saveTabStatus();
    // }

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

    return { isAllTasks, isBookmarked, storeTabStatus, getTabStatus, saveTabStatus, allTasksButtonToggle, bookmarkedButtonToggle }

}