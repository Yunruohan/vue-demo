<template>
  <div id="app">
    <!--<showBlog></showBlog>-->
    <blogheader></blogheader>
    <router-view></router-view>
  </div>
</template>

<script>
  import addblog from './components/addblog.vue'
  import showBlog from './components/showBlog.vue'
  import blogheader from './components/BlogsHeader.vue'
  import Singblog from './components/Singblog.vue'

export default {
  name: 'App',
  components:{
    "addblog":addblog,
    showBlog,blogheader,Singblog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
