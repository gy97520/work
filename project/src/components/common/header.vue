<template>
  <div class="bannerHover" :style="{backgroundImage:`url(${back})`}">
    <Sheader />
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
        back:require("../../assets/images/comHeader/bg1.jpg")
      }
    },

    methods: {
      getUrl(){
        let path = this.$route.path;
        console.log(path);
        switch (path) {
          case '/companyProfile':
          case '/companyCulture':
          case '/managementTeam':
          case '/organizationChart':
          case '/enterpriseQualification':
          case '/team style':
            this.back=require("../../assets/images/comHeader/bg1.jpg");
            break;
          case '/businessArea':
          case '/projectResult':
          case '/solution':
            this.back=require("../../assets/images/comHeader/bg2.jpg");
            break;
          case '/employ':
            this.back=require("../../assets/images/comHeader/bg7.jpg");
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
    width:87%;
    height:300px;
  }
</style>

