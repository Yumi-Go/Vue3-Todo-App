import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const search = ref('');

export function useSearch() {
    
    const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

    function filteredTasks() {
        return getAllTasks.value.filter(obj => 
        obj.name.toLowerCase().includes(search.value.toLowerCase()));
        // Question: includes() vs match().. which one is better?
    }
    return { search, filteredTasks }
}