import { ref } from "vue";
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

const search = ref('');

export function useSearch(objects) {
    
    function filteredTasks() {
        return Object.values(objects).filter(obj => 
        obj.name.toLowerCase().includes(search.value.toLowerCase()));
        // Question: includes() vs match().. which one is better?
    }
    return { search, filteredTasks }
}