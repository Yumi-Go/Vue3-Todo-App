import { ref } from "vue"
import { useLocalStorage, StorageSerializers } from '@vueuse/core';


export function useSearch() {
    
    const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

    const search = ref('');
    console.log("search: ", search.value);
    
    function filteredTasks() {
      let input = search.value.toLowerCase();
        return getAllTasks.value.filter(obj => obj.name.toLowerCase().match(input));
    }
    return { search, filteredTasks }
}