import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import 'normalize.css/normalize.css'
import './assets/css/index.css'

import WdButton from './common/WdButton/index'//引用全局组件Button
Vue.use(WdButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
