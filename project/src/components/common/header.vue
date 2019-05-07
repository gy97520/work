<template>
  <div class="bannerHover" :style="{backgroundImage:`url(${back})`}">
    <Sheader></Sheader>
  </div>
</template>
<script>
  import  Sheader from  './sheader'
  export default {
    name: "header",
    components:{
      Sheader,
    },
    data() {
      return {
        that:this,
        back:require("../../assets/images/comHeader/bg22.jpg")
      }
    },
    methods: {
      getUrl(){
        let path = this.$route.path;
        switch (path) {
          case '/companyProfile':
          case '/companyCulture':
          case '/managementTeam':
          case '/organizationChart':
          case '/enterpriseQualification':
          case '/teamStyle':
                  this.back=require("../../assets/images/comHeader/bg23.png");
                  break;
          case '/businessArea':
          case '/projectResult':
          case '/productShow':
          case '/solution':
          case '/technicalSupport':
                  this.back=require("../../assets/images/comHeader/bg22.jpg");
                  break;
          case '/employ':
                  this.back=require("../../assets/images/comHeader/bg24.jpg");
                  break;
          case '/contact':
            this.back=require("../../assets/images/comHeader/bg26.jpg");
            break;
        }
      }
    },
    created(){
    this.getUrl();
    },
    watch:{
      '$route':'getUrl'
    }
  }
</script>

<style scoped>
  .bannerHover{
    width:1500px;
    min-height:300px;
    margin: 0 auto;
  }
</style>

