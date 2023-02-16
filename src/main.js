import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueFeather from 'vue-feather'

import "./assets/styles.css"

import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"

createApp(App)
  .component(VueFeather.name, VueFeather)
  .use(router)
  .mount('#app')
