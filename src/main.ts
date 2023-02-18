import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import App from './App.vue'

const vue = createApp(App)

vue.use(ElementPlus)
vue.use(router)

vue.mount('#app')
