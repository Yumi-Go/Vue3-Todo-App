import { useLocalStorage } from '@vueuse/core';

const allTasks = useLocalStorage('all', []);

export function useDelete() {
    function deleteTask(taskId) {
        if (allTasks.value.length > 0) {
            allTasks.value.forEach((task, index) => {
                if (taskId === task.id) {
                    allTasks.value.splice(index, 1);
                }
            });
        }
    }
    return { deleteTask }
}
