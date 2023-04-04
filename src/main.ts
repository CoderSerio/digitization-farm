import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import App from './App.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import './style.css'

const vue = createApp(App)

vue.use(ElementPlus, { locale: zhCn })
vue.use(router)

vue.mount('#app')
