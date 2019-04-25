<template>
  <div  style="position: fixed;top: 0;left: 85px;z-index: 10000;">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="logo"><img src="../../assets/images/comindex/logo_white.png" style="width:80%;margin-left: 158px;"/></div>
      <el-menu-item index="1"  @click="that.$jk.getDescribe('/')">首页</el-menu-item>
      <el-submenu index="2"  >
        <template slot="title">走进聚而禾</template>
        <router-link tag="el-menu-item" :index="'1-'+index"  v-for="(item,index) in oneDetail " :key="index"  :to="{path:'/'+item.addres}" >{{item.value}}</router-link>

      </el-submenu>
      <el-submenu index="3">
        <template slot="title">业务体系</template>
        <router-link tag="el-menu-item" :index="'2-'+index"  v-for="(item,index) in twoDetail " :key="index"  :to="{path:'/'+item.addres}" >{{item.value}}</router-link>
      </el-submenu>
      <el-menu-item index="4" @click="that.$jk.getDescribe('/employ')">招贤纳士</el-menu-item>
      <el-menu-item index="5" @click="that.$jk.getDescribe('/contact')">联系我们</el-menu-item>
    </el-menu>

  </div>

</template>

<script>
  export default {
    name: "s_header",
    data() {
      return {

        listData: [],
        that:this,
        oneDetail: [
          {value: '公司简介',addres:'companyProfile'},
          {value: '公司文化',addres:'companyCulture'},
          {value: '组织架构',addres:'organizationChart'},
          {value: '资质荣誉',addres:'enterpriseQualification'},
          {value: '管理团队',addres:'managementTeam'},
          {value: '团队风采',addres:'teamStyle'},
        ],
        twoDetail: [
          {value: '业务领域',addres:'businessArea'},
          {value: '项目成果',addres:'projectResult'},
          {value: '产品展示',addres:'resultShow'},
          {value: '解决方案',addres:'solution'},
          {value: '技术支持',addres:'solution'},

        ],

      }
    },

  }
</script>


