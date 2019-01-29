<template>
  <div>
<div id="app2" v-bind:title="message">我是login{{message}}</div>

    <div @mouseenter ="enter(index)" class="cont" @mouseleave ="out" v-for="(i,index) in lists" >点击隐藏再点显示{{i.name}}

      <div v-if="shows===index" >真呀么真开心！！</div>

    </div>

    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>


</template>

<script>
    export default {
        name: "login",

      data(){
         return{
        message: 'Hello Vue,' + new Date().toLocaleString(),
           show:true,
           shows:-1,

           lists:[{id:1,name:'第一颖'},
                   {id:2,name:'第二颖'},
                   {id:3,name:'第三颖'},
                  ]
         }

      },
      methods:{
        enter:function (a){

          this.shows = a;

        },
        out:function () {
          this.shows = -1;
        }
      },

    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .cont{
    width: 300px;
    height: 300px;
    background: yellow;
  }
</style>
