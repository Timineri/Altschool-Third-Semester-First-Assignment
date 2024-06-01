// import './assets/main.css'

// import { createApp } from 'vue'

// import App from './App.vue'

// const app = createApp(App)

// app.mount('#app')

import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(router).use(vuetify).mount('#app')
//createApp(App).use(router).mount('#app')
