<template>
  <div style="width: 1617px;margin: 0 auto;">
    <div class="clearfix" style="height:270px;">
      <div class="bannerHover1">

        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <div class="logo"><img src="../../assets/images/comindex/logo_white.png"/></div>
          <el-submenu index="1" >
            <template slot="title">走进聚而禾</template>
            <el-menu-item :index="'1-'+index"  v-for="(item,index) in oneDetail " :key="index"  @click="that.$jk.getDescribe('/moreNews')">{{item.value}}</el-menu-item>


          </el-submenu>
          <el-submenu index="2">
            <template slot="title">业务体系</template>
            <el-menu-item :index="'2-'+index"  v-for="(item,index) in twoDetail " :key="index">{{item.value}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">招贤纳士</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>

      </div>
    </div>
    <div class="clearfix" >
    <div class="left_nav" style="float: left">
      <h2>业务体系</h2>
      <ul class="lefu">
        <router-link to="bu" tag="li"><a>业务领域</a></router-link>
        <router-link to="result"  tag="li"><a>项目成果</a></router-link>
        <router-link to="result"  tag="li"><a>产品展示</a></router-link>
        <router-link to="solution"  tag="li"><a>解决方案</a></router-link>
        <router-link to=""  tag="li"><a>技术支持</a></router-link>
      </ul>

    </div>
    <router-view></router-view>
    </div>
    <div style="height:300px;background: black;margin-top: 20px;">

    </div>

  </div>


</template>

<script>

    export default {
        name: "two-header",
      data() {
        return {
          activeIndex: '1',
          listData: [],
          oneDetail: [
            {value: '公司简介', path: 'index'},
            {value: '公司文化', path: 'film', id: 0},
            {value: '组织架构', path: 'login'},
            {value: '资质荣誉', path: 'about_culture', id: 1},
            {value: '管理团队', path: 'join_us'},
            {value: '团队风采', path: 'contact_us'},
          ],
          twoDetail: [
            {value: '业务领域', path: 'index'},
            {value: '项目成果', path: 'film', id: 0},
            {value: '产品展示', path: 'login'},
            {value: '解决方案', path: 'about_culture', id: 1},
            {value: '技术支持', path: 'join_us'},

          ],

        }
      },
      methods: {


      }
    }
</script>

<style scoped>
  .nav {
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
  }
  .nav ul{
    list-style: none;
    width:1200px;
    margin: 0 auto;
  }
  .nav li{
    float:left;
    margin-right: 60px;
    color:#636363;
    height:55px;
    line-height: 55px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .nav .active{
    border-bottom:2px solid #32cd32 !important;
  }
  .sNav {
    height: 101px;
    width: 45%;
    background: white;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 7.5px;
    border-radius: 3px;
  }
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
