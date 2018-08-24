// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routes from './routers'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.directive('rainbow',{
  bind(el,bingding,vnode){
    el.style.color="#"+Math.random().toString(16);
  }
});
const router = new VueRouter({
  routes:Routes,
  mode:"history"
  //这个属性定义是固定的
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
});
