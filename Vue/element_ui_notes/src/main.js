import Vue from 'vue'
import App from './App.vue'
// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入router
import router from "@/router"

Vue.config.productionTip = false
// 启用elementUI
Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')