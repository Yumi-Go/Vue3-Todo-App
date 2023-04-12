import { useLocalStorage, StorageSerializers } from '@vueuse/core';


export function useDelete() {
    
    const getAllTasks = useLocalStorage("all", null, { serializer: StorageSerializers.object });

    function deleteTask(index) {
        if (getAllTasks.value.length > 0) {
          getAllTasks.value.splice(index, 1);
        }
      }

    return { deleteTask }
}