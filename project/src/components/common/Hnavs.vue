<template>
  <div class="clearfix" style="height:270px;width: 1617px;margin: 0 auto;">
    <div class="bannerHover1">

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <div class="logo"><img src="../../assets/images/comindex/logo_white.png"/></div>
        <el-menu-item index="1" @click="that.$jk.getDescribe('/')">首页</el-menu-item>
        <el-submenu index="2" >
          <template slot="title">走进聚而禾</template>
          <el-menu-item :index="'1-'+index"  v-for="(item,index) in oneDetail " :key="index"  @click="that.$jk.getDescribe(item.addres)">{{item.value}}</el-menu-item>


        </el-submenu>
        <el-submenu index="3">
          <template slot="title">业务体系</template>
          <el-menu-item :index="'2-'+index"  v-for="(item,index) in twoDetail " :key="index" @click="that.$jk.getDescribe(item.addres)">{{item.value}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="that.$jk.getDescribe('/')">招贤纳士</el-menu-item>
        <el-menu-item index="5" @click="that.$jk.getDescribe('/')">联系我们</el-menu-item>
      </el-menu>

    </div>

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
          {value: '公司简介', path: 'index',addres:'Hnavs'},
          {value: '公司文化', path: 'film',addres:'cu'},
          {value: '组织架构', path: 'login',addres:'org'},
          {value: '资质荣誉', path: 'about_culture',addres:'cu'},
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

</style>
