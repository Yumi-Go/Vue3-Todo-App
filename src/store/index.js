import { createStore } from "vuex";

  export default createStore({
      state: {}, 
      getters: {},
      mutations: {},
      actions: {},
  });






// import { computed } from 'vue'
// import { useStore } from 'vuex'

// export default {
//     setup () {
//         const store = useStore()

//         return {
//             count: computed(() => store.state.count),
//             double: computed(() => store.getters.double),
//             increment: () => store.commit('increment'),
//             asyncIncrement: () => store.dispatch('asyncIncrement')
//         }
//   }
// }