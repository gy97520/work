<template>

  <div class="static_home" style="width: 1665px;margin: 0 auto">


  <navs ></navs>

  <sheader></sheader>


    <div class="container">
      <transition name="move" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from './vfooter'
  import sheader from './s_header.vue';
  import navs from './navs.vue';

  export default {
    components: {
      vfooter,
      sheader,
      navs
    },
    name: "static_home",
    data() {
      return {
        isDisplay:true,
        banner:this.$img.newsBan,
        navList:[]
      }
    },
    methods: {
      handleSelect() {
      },
      monitorRouter(){
      }
    },
    watch:{
      '$route':'monitorRouter'
    },
    mounted() {
      this.monitorRouter();
    },
  }
</script>

<style scoped>
  @media only screen and (min-width: 500px){
    .content {
      min-height: 540px;
      background-color: white;
      padding: 0;
    }
  }
</style>
