<template>
  <div class="bannerHover">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="logo"><img src="../../assets/images/comindex/logo_white.png" style="width:80%;margin-left: 158px;"/></div>
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2" >
        <template slot="title">走进聚而禾</template>
        <el-menu-item :index="'1-'+index"  v-for="(item,index) in oneDetail " :key="index"  @click="that.$jk.getDescribe(item.addres)">{{item.value}}</el-menu-item>


      </el-submenu>
      <el-submenu index="3">
        <template slot="title">业务体系</template>
        <el-menu-item :index="'2-'+index"  v-for="(item,index) in twoDetail " :key="index" @click="that.$jk.getDescribe(item.addres)">{{item.value}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="that.$jk.getDescribe('/employ')">招贤纳士</el-menu-item>
      <el-menu-item index="5" @click="that.$jk.getDescribe('/contact')">联系我们</el-menu-item>
    </el-menu>

  </div>

</template>

<script>
  export default {
    name: "navs",
    data() {
      return {
        activeIndex: '1',
        listData: [],
        that:this,
        oneDetail: [
          {value: '公司简介', path: 'index',addres:'pr'},
          {value: '公司文化', path: 'film',addres:'cu'},
          {value: '组织架构', path: 'login',addres:'org'},
          {value: '资质荣誉', path: 'about_culture',addres:'qua'},
          {value: '管理团队', path: 'join_us',addres:'man'},
          {value: '团队风采', path: 'contact_us',addres:'team'},
        ],
        twoDetail: [
          {value: '业务领域', path: 'index',addres:'bu'},
          {value: '项目成果', path: 'film',addres:'result'},
          {value: '产品展示', path: 'login',addres:'result'},
          {value: '解决方案', path: 'about_culture',addres:'solution'},
          {value: '技术支持', path: 'join_us',addres:'solution'},

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
</style>
