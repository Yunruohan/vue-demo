<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
          <router-link to="/add">写博客</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
  export default {
    name: 'blog-header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style-type:none;
  text-align:center;
  margin:0;

}
  li{
    display:inline;
    margin:0 10px;
  }
  a{
    color:#fff;
    padding:12px;
    border-radius:5px;
    text-decoration:none;
  }
  nav{
    background:crimson;
    padding:30px 0;
    margin-buttom:40px;
  }
  .router-link-active{
    background:rgba(255,255,255,0.8);
    color:#444;
  }
</style>
