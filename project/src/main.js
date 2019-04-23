// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import fun from './jiekou.js';
import img from '../src/assets/images/index.js'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import $ from 'jquery'
import animated from 'animate.css'
import '../src/assets/css/common.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false;


Vue.use(ElementUI);
Vue.use(preview)
Vue.use(animated)

Vue.component('icon',Icon)

Vue.prototype.$img=img;
Vue.prototype.$ajax=axios;
/*Vue.prototype.$jk=fun;*/
Vue.prototype.$=$;
axios.defaults.baseURL = 'https://mumuwu.com/mmw-official-service';
axios.defaults.timeout  = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*axios.defaults.baseURL = '/api'*/
Vue.prototype.$jk= {
  getDescribe(router,query) {
    vm.$router.push({
      path:router||'',
      query:query,
    })
  },

};
let vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
