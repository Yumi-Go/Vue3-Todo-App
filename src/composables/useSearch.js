import { ref } from "vue";
import { useLocalStorage } from '@vueuse/core';

const allTasks = useLocalStorage("all", []);
const search = ref('');

export function useSearch() {
    function filteredTasks(objects) {
        return Object.values(objects).filter(obj => 
        obj.name.toLowerCase().includes(search.value.toLowerCase()));
    }
    return { search, filteredTasks }
}