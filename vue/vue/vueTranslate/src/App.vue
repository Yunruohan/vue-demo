<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单、易用、便捷</h5>
    <Translate v-on:formSubmit="translateText"></Translate>
    <TranslateOut v-text="translatedText"></TranslateOut>
  </div>
</template>

<script>
  import Translate from "./components/Translate.vue"
  import TranslateOut from "./components/TranslateOut.vue"
export default {
  name: 'App',
  data:function () {
    return{
      translatedText:""

    }
  },
  methods:{
    translateText:function(text,language){
//      alert(text);
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180423T144850Z.ee083cd47f2d7dad.c86615af483b3d7f0982e3b9db820847432258e6&lang='+language+'&text='+text)
        .then((response)=>{
//        console.log(response);
        this.translatedText = response.body.text[0];
        })
    }
  },
  components:{
     "Translate":Translate,
    "TranslateOut":TranslateOut,
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
