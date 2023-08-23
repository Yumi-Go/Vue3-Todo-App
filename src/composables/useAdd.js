import { ref } from "vue";
import { useLocalStorage } from '@vueuse/core';

const allTasks = useLocalStorage('all', []);
const newTask = ref('');

export function useAdd() {
    function idCounter() {
        let result = 1;
        if (allTasks.value.length > 0) {
            result = allTasks.value[allTasks.value.length - 1].id + 1;
        }
        return result;
    }

    function addTask() {
        if (newTask.value.trim().length > 0) {
            allTasks.value.push({
                id: idCounter(),
                name: newTask.value,
                bookmarked: false,
                completed: false,
            });
        }
        newTask.value = '';
    }
    return { newTask, addTask }
}


