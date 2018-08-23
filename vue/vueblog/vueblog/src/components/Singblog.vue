<template>
  <div id="Singblog">
   <h1>{{blog.title}}</h1>
    <div>{{blog.body}}</div>
  </div>
</template>
<script>
  export default {
    name:"Singblog",
    data(){
      return {
        id:this.$route.params.id,
        blog:{

        }
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
//          console.log(data);
          this.blog=data.body;
        })
    }
  }
</script>
<style>

</style>
