<template>
  <div class="row" id="Translate">
    <div class="col-md-6 col-md-offset-3">
        <form class="well form-inline" v-on:submit="formSubmit" action="">
          <input class="form-control" type="text" placeholder="输入需要翻译的内容" v-model="textToTranslate">
          <select class="form-control" v-model="language" name="" id="">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="ko">Korean</option>
            <option value="ja">Janpenese</option>
          </select>
          <input type="submit" value="翻译">
        </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Translate',
    data:function(){
      return {
        textToTranslate:"",
        language:""
      }
    },
    methods:{
      formSubmit:function (e) {
//        alert("hello world");
        this.$emit("formSubmit",this.textToTranslate,this.language);
        e.preventDefault();//消除默认事件
      }
    },
    components:{

    }
  }
</script>

<style>
</style>
