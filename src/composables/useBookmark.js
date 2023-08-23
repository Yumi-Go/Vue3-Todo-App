import { useLocalStorage } from '@vueuse/core';

const allTasks = useLocalStorage("all", []);

export function useBookmark() {
    
    function getBookmarkedTasks() {        
        return allTasks.value.filter(obj => obj.bookmarked);
    }

    function bookmarkTask(index) {
        console.log("bookmark index: ", index);
        allTasks.value[index].bookmarked = true;
    }

    function unBookmarkTask(index) {
        console.log("unbookmark index: ", index);
        allTasks.value[index].bookmarked = false;
    }
    
    return { getBookmarkedTasks, bookmarkTask, unBookmarkTask }
}