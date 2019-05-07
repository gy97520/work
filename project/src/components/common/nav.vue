<template>
    <div >
      <Header></Header>
      <div style="margin: 0 auto;width:1180px;" class="clearfix">
      <div class="left_nav" style="float: left">
        <h2 v-for="item in tit[titKey]">{{item.title}}</h2>
        <ul class="lefu">
          <router-link :to="item.eName"  tag="li" exact v-for="item in comnav[curKey]" :key="index"><a>{{item.name}}</a></router-link>
        </ul>
      </div>
      <div class="right_nav" style="float: left;width:50%;">
      <router-view></router-view>
      </div>
      </div>
    </div>

</template>

<script>
  import  Header from './header'
    export default {
        name: "nav",
      components:{
        Header,
      },
      data(){
          return{
           comnav:{
              go: [
                {name: "公司简介", eName: "companyProfile"},
                {name: "公司文化", eName: "companyCulture"},
                {name: "组织架构", eName: "organizationChart"},
                {name: "资质荣誉", eName: "enterpriseQualification"},
                {name: "管理团队", eName: "managementTeam"},
                {name: "团队风采", eName: "teamStyle"},
              ],
              business: [
                {name: "业务领域", eName: "businessArea"},
                {name: "项目成果", eName: "projectResult"},
                {name: "产品展示", eName: "productShow"},
                {name: "解决方案", eName: "solution"},
                {name: "技术支持", eName: "technicalSupport"},
              ],
             employ: [
                {name: "人才招聘", eName: "employ"},
              ],
             contact: [
               {name: "联系我们", eName: "contact"},
             ],
            },
            curKey:'zoujin',
            tit:{
              go: [
                {title:"走进聚而禾"},
              ],
              business: [
                {title:"业务体系"},
              ],
              employ: [
                {title:"招贤纳士"},
              ],
              contact: [
                {title: "联系我们"},
              ],
            },
            titKey:'zoujin',
          }
      },
      methods:{
       getNav(){
          let path = this.$route.path;
          switch (path) {
            case '/companyProfile':
            case '/companyCulture':
            case '/ManagementTeam':
            case '/organizationChart':
            case '/enterpriseQualification':
            case '/teamStyle':this.curKey='go';this.titKey='go';break;
            case '/businessArea':
            case '/projectResult':
            case '/resultShow':
            case '/technicalSupport':
            case '/solution':this.curKey='business';this.titKey='business';break;
            case '/employ':this.curKey='employ';this.titKey='employ';break;
            case '/contact':this.curKey='contact';this.titKey='contact';break;

          }
        }
      },
      created(){
        this.getNav();
      },
     watch:{
        '$route':'getNav'
      }
    }
</script>

<style scoped>

  .left_nav h2{
    font-size: 22px;
    height: 70px;
    background: white;
    line-height:70px;
  }
  .left_nav{

    width: 300px;
    height:590px;
    background: rgba(252, 252, 252, 0.86);
    border: 1px solid #dedede;

  }
  h2{
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .lefu{
    width:100%;
    margin-left: -40px;
  }
  .lefu li{
    height: 60px;
    line-height: 60px;

  }
  .lefu li:hover{
    background: #eeeeee;

  }
  .lefu li a{
    width:100%;
    display: inline-block;
    text-align: center;
  }
  .lefu li a:hover{
    text-decoration: none;
  }

</style>
