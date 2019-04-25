<template>
  <div id="app" >
 <router-view ></router-view>
   <Footer></Footer>
  </div>
</template>

<script>
import  Footer from './components/common/footer'
  export default {
    name:'app',
    data(){
      return{
        header_show:true,
        footer_show:true,
      }
    },
    components:{
      Footer
    },
}
</script>

<style>
  html,body{
    width:100%;
    height: 100%;
  }
  .active{
    color:red;

  }
</style>

