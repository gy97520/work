<template>
    <div class="" >
      <Header />
      <div style="margin: 0 auto;width:87%;" class="clearfix">
      <div class="left_nav" style="float: left">
        <h2>业务体系</h2>
        <ul class="lefu">
          <router-link :to="item.eName" tag="li" v-for="item in comnav[curKey]"><a>{{item.name}}</a></router-link>
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
        tex:"A",
      components:{
        Header,
      },
      data(){
          return{
           comnav:{
              zoujin: [
                {name: "公司简介", eName: "companyProfile"},
                {name: "公司文化", eName: "companyCulture"},
                {name: "组织架构", eName: "organizationChart"},
                {name: "资质荣誉", eName: "enterpriseQualification"},
                {name: "管理团队", eName: "managementTeam"},
                {name: "团队风采", eName: "teamStyle"},
              ],
              yewu: [
                {name: "业务领域", eName: "businessArea"},
                {name: "项目成果", eName: "projectResult"},
                {name: "产品展示", eName: "productShow"},
                {name: "解决方案", eName: "solution"},
                {name: "技术支持", eName: "solution"},
              ],
              zhaoxian: [
                {name: "招贤纳士", eName: "employ"},
              ],
            },
            curKey:'zoujin',
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
            case '/teamStyle':this.curKey='zoujin';break;
            case '/businessArea':
            case '/projectResult':
            case '/resultShow':
            case '/solution':this.curKey='yewu';break;
            case '/employ':this.curKey='zhaoxian';break;

          }
        }
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
