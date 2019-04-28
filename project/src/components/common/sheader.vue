<template>
  <div id="searchBar" style="position: fixed;top: 0;left:124px;z-index: 10000;width: 87%;">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="logo"><img src="../../assets/images/comindex/logo.png"></div>
      <el-menu-item index="1"  @click="that.$jk.getDescribe('/')">首页</el-menu-item>
      <el-submenu index="2"   >
        <template slot="title">走进聚而禾</template>
        <router-link tag="el-menu-item"  :index="'2-'+index"  v-for="(item,index) in oneDetail " :key="index"  :to="{path:'/'+item.addres}" >{{item.value}}</router-link>

      </el-submenu>
      <el-submenu index="3">
        <template slot="title">业务体系</template>
        <router-link tag="el-menu-item" :index="'3-'+index"  v-for="(item,index) in twoDetail " :key="index"  :to="{path:'/'+item.addres}" >{{item.value}}</router-link>
      </el-submenu>
      <el-menu-item index="4" @click="that.$jk.getDescribe('/employ')">招贤纳士</el-menu-item>
      <el-menu-item index="5" @click="that.$jk.getDescribe('/contact')">联系我们</el-menu-item>
    </el-menu>

  </div>

</template>

<script>
  export default {
    name: "sheader",
    data() {
      return {

        listData: [],
        that: this,
        isActive: false,
        oneDetail: [
          {value: '公司简介', addres: 'companyProfile'},
          {value: '公司文化', addres: 'companyCulture'},
          {value: '组织架构', addres: 'organizationChart'},
          {value: '资质荣誉', addres: 'enterpriseQualification'},
          {value: '管理团队', addres: 'managementTeam'},
          {value: '团队风采', addres: 'teamStyle'},
        ],
        twoDetail: [
          {value: '业务领域', addres: 'businessArea'},
          {value: '项目成果', addres: 'projectResult'},
          {value: '产品展示', addres: 'resultShow'},
          {value: '解决方案', addres: 'solution'},
          {value: '技术支持', addres: 'solution'},

        ],

      }
    },
    created(){
      document.querySelector('#searchBar').style.background = 'transparent';
    },
    mounted() {//给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {

      navUrl1() {
        let path = this.$route.path;
        switch (path) {
          case '/companyProfile':
          case '/companyCulture':
          case '/managementTeam':
          case '/organizationChart':
          case '/enterpriseQualification':
          case '/team style':
          case '/businessArea':
          case '/projectResult':
          case '/solution':
          case '/employ':
            document.querySelector('#searchBar').style.background = '#00000036';
            break;
        }

      },
      navUrl2() {
        let path = this.$route.path;
        switch (path) {
          case '/':
            document.querySelector('#searchBar').style.background = 'transparent';
            break;
        }
      },
      handleScroll() { //改变元素#searchBar的top值
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < 214) {
          document.querySelector('#searchBar').style.background = 'transparent';
        }
        else if(scrollTop <=413){
          this.navUrl1();
          this.navUrl2();
        }
        else {
          document.querySelector('#searchBar').style.background = '#00000036';
        }
      },

     destroyed() {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll);
      },
    },

  }
</script>

<style scoped>
 .act{
    color:red !important;
  }
</style>
