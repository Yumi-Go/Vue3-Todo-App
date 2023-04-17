import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

export function useBookmark() {
    
    function getBookmarkedTasks() {        
        return getAllTasks.value.filter(obj => obj.bookmarked);
    }

    function bookmarkTask(taskID) {
        Object.values(getAllTasks.value).forEach(task => {
            console.log(task.id);
            console.log(taskID);
            if (task.id === taskID) {
                task.bookmarked = true;
                console.log("bookmarkTask: ", task.bookmarked);
            }
        });

        // console.log("bookmark index: ", index);
        // Object.values(getAllTasks)[index].bookmarked = true;

    }
    
    return { getBookmarkedTasks, bookmarkTask }
}


export function useUnBookmark() {
        
    function unBookmarkTask(taskID) {
        Object.values(getAllTasks.value).forEach(task => {
            if (task.id === taskID) {
                task.bookmarked = false;
                console.log("unBookmarkTask: ", task.bookmarked);

            }
        });
        // console.log("unbookmark index: ", index);
        // Object.values(getAllTasks)[index].bookmarked = false;
    }

    return { unBookmarkTask }
}


