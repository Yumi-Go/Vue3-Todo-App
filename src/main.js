import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'

import './style.css'
// import './index.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import { mdiAccount } from '@mdi/js'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})

createApp(App).use(router).use(store).use(vuetify).mount('#app')