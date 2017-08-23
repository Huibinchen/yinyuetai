// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios
import VueLazyload from "vue-lazyload"


Vue.use(VueLazyload, {
	error: 'assets/logo.png',//这个是请求失败后显示的图片
	loading: 'assets/loading.gif',//这个是加载的loading过渡效果
	try: 100 // 这个是加载图片数量
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//template: '<App/>',
//components: { App },
render: h => h(App)
})
