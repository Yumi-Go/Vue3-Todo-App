import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

export function useBookmark() {
    
    function getBookmarkedTasks() {        
        return getAllTasks.value.filter(obj => obj.bookmarked);
    }

    function bookmarkTask(index) {
        Object.values(getAllTasks)[index].bookmarked = true;
    }
    
    return { getBookmarkedTasks, bookmarkTask }
}


export function useUnBookmark() {
        
    function unBookmarkTask(index) {
        Object.values(getAllTasks)[index].bookmarked = false;
    }

    return { unBookmarkTask }
}


