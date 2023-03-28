import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'

import './style.css'
// import './index.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(store).use(vuetify).mount('#app')