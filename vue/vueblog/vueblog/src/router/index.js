import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import showBlogs from '@/components/showBlogs'
import addblogs from '@/components/addblogs'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showBlogs',
      component: 'showBlogs'
    },
    {
      path:'/addblogs',
      name:"addblogs",
      component:'addblogs'
    }
  ]
})
