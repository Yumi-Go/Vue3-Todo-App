import { useLocalStorage } from '@vueuse/core';

const allTasks = useLocalStorage("all", []);

export function useBookmark() {
    
    function getBookmarkedTasks() {        
        return allTasks.value.filter(obj => obj.bookmarked);
    }

    function bookmarkTask(taskId) {
        allTasks.value.forEach(task => {
            if (taskId === task.id) {
                task.bookmarked = true;
            }
        });
    }

    function unBookmarkTask(taskId) {
        allTasks.value.forEach(task => {
            if (taskId === task.id) {
                task.bookmarked = false;
            }
        });
    }
    
    return { getBookmarkedTasks, bookmarkTask, unBookmarkTask }
}