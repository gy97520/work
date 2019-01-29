<template>

  <div class="container bg_index" >
    <div class="row"></div>
    <el-row>
      <el-col :span="8"><img src="../assets/images/comindex/jianjie.jpg" height="250px" width="80%" style="padding: 20px"></el-col>
      <el-col :span="8">
        <div>
          <h3>公司简介</h3>
          <div class="over">{{this.text}}...</div>
          <p style="text-align: right;padding-right: 50px" class="p1">更多...</p>
        </div>
      </el-col>
      <el-col :span="8" >
        <div>
        <h3 style="text-align: center">新闻动态</h3>
          <ul class="news">
            <li><a href="">天津市武清区土地二级市场试点项目顺利通过部级验收</a><span>2018-11-29</span></li>
            <li><a href="">文章标题风景园林设计文化的认识和实践体会</a><span>2018-11-29</span></li>
            <li><a href="">文章标题风景园林设计文化的认识和实践体会</a><span>2018-11-29</span></li>
            <li><a href="">文章标题风景园林设计文化的认识和实践体会</a><span>2018-11-29</span></li>
            <li><a href="">文章标题风景园林设计文化的认识和实践体会</a><span>2018-11-29</span></li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <button class="btn btn-default">sfdsfsd</button>
  </div>
</template>

<script>
    export default {
        name: "comIndex",
      data(){
          return{

            text:'杭州聚而禾土地规划设计咨询有限公司创建于2016年6月，位于杭州西湖区的黄龙商圈。具有土地规划、摄影测量与遥感、地理信息系统工程、工程测量、不动产测绘、不动产登记代理、土地勘测、林业调查规划设计、城乡规划编制、文物保护工程等行业资质。公司注册资本金1005万，公司自成立以来，累计承接项目上千万。' +
          '公司致力于土地调查评价、规划设计、政策咨询、项目前期服务、地理信息系统的技术开发、测绘技术、农林业调查与规划设计等业务领域，服务于各级国土、农业、林业、交通、水利等政府机关和企事业单位'

          }

      },

    }
</script>

<style scoped>

</style>
