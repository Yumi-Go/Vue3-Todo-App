import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const storeAllTasks = useLocalStorage('all', []);
const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });


const newTask = ref('');

export function useAdd() {
    
    function idCounter() {
        let result = 1;
        if (getAllTasks.value.length > 0) {
            result = getAllTasks.value[getAllTasks.value.length - 1].id + 1;
        }
        return result;
    }

    function addTask() {
        if (newTask.value.trim().length > 0) {
            storeAllTasks.value.push({
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


