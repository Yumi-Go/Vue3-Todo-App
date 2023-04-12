import { useLocalStorage, StorageSerializers } from '@vueuse/core';


export function useBookmark() {
    
    const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

    function bookmarkedTasks() {
        const bookmarkedObj = getAllTasks.value.filter((obj) => obj.bookmarked);
        return bookmarkedObj.map(obj => obj.id);
    }
    
    function bookmarkTask(taskID) {
        Object.values(getAllTasks.value).forEach(task => {
            if (task.id === taskID && !bookmarkedTasks().includes(taskID)) {
                task.bookmarked = true;
            }
        });
    }
    
    function unBookmarkTask(taskID) {
        Object.values(getAllTasks.value).forEach(task => {
            if (task.id === taskID && bookmarkedTasks().includes(taskID)) {
                task.bookmarked = false;
                bookmarkedTasks().splice(bookmarkedTasks().indexOf(taskID), 1);
            }
        });
    }

    return { bookmarkTask, unBookmarkTask }
}