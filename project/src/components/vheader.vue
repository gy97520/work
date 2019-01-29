<template>
  <div>
    <template>
      <el-carousel :interval="5000" arrow="always" class="d_jump">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <span style="font-family: 微软雅黑; font-size: 20px;display:inline-block"  class = "animated bounceInLeft" >谜语</span>
            <el-col :span="24"><img  :src="item.idView" ref="tt" class="banner_img" /></el-col>

        </el-carousel-item>
      </el-carousel>
    </template>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>



  </div>
</template>

<script>

    export default {

        name: "vheader",
      data() {

        return {
          activeIndex: '1',
          activeIndex2: '1',
          height:'',
          imgList: [
            {id: 0, name: '首页',idView: require('../assets/images/bg7.jpg')},
            {id: 1, name: '详情', idView: require('../assets/images/bg2.jpg')},
            {id: 2, name: '推荐', idView: require('../assets/images/bg1.jpg')}

          ]
        };

      },
      methods: {



    handleSelect(key, keyPath) {
          console.log(key, keyPath);
      console.log(this.$ref.tt.src);
    }

      }
    }

</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
