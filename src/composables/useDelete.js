import { useLocalStorage } from '@vueuse/core';

export function useDelete() {
    
    const allTasks = useLocalStorage("all", []);

    function deleteTask(index) {
        if (allTasks.value.length > 0) {
          allTasks.value.splice(index, 1);
        }
      }
    return { deleteTask }
}