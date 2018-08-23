<template>
  <div class="showBlog">
      <h1>博客展示</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="sing-blog">
      <router-link v-bind:to="'/Singblog/'+blog.id">
         <h2 v-raibow>{{blog.title}}</h2>
      </router-link>
      <h2 v-rainbow>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'showBlog',
    data () {
      return {
        blogs:[],
        search:""
        }
      },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
          this.blogs=data.body.slice(0,10);
        })
    },
    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search)
        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showBlog{
  max-width:800px;
  margin:0 auto;

}
  .sing-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background:#eee;
  }
</style>














