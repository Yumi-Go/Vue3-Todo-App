import { useLocalStorage, StorageSerializers } from '@vueuse/core';


export function useBookmark() {
    
    const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });
    
    function bookmarkTask(taskID) {
        getAllTasks.value.forEach(task => {
            if (task.id === taskID) {
                task.bookmarked = true;
            }
        });
    }
    
    function unBookmarkTask(taskID) {
        getAllTasks.value.forEach(task => {
            if (task.id === taskID) {
                task.bookmarked = false;
            }
        });
    }

    return { bookmarkTask, unBookmarkTask }
}