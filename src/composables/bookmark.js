import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const allTasks = useLocalStorage("all", []);

export function useBookmark() {
    
    function getBookmarkedTasks() {        
        return allTasks.value.filter(obj => obj.bookmarked);
    }

    function bookmarkTask(index) {
        Object.values(allTasks)[index].bookmarked = true;
    }

    function unBookmarkTask(index) {
        Object.values(allTasks)[index].bookmarked = false;
    }
    
    return { getBookmarkedTasks, bookmarkTask, unBookmarkTask }
}