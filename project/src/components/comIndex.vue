<template>

  <div class="container bg_index" >
    <div class="row"></div>
    <el-row>

      <el-col :span="5" >
        <div>
          <img src="../assets/images/comindex/jianjie.jpg" height="348px" width="280px"  style="">
        </div>
      </el-col>
      <el-col :span="7" style="background:white;margin-left:30px">
        <div>
          <h4 style="padding-left:20px;">公司简介</h4>
          <div  style="margin:0 20px 12px 20px;">
            {{this.text}}
          </div>

        </div>
      </el-col>
      <el-col :span="3" style="margin-left:20px" >
        <div style="background:rgb(0, 66, 142);padding-left: 30px;color:white;">
          <br><br>
          <p>NEWS</p>
          <h3>新闻动态</h3>
          <div style="margin-top: -23px;">_____</div>
          <br><br><br><br><br><br><br><br>
          <div  style="color: white" @click="that.$jk.getDescribe('/moreNews')">MORE+</div>
          <br><br>
        </div>
      </el-col>
      <el-col :span="8" style="background:white;">
        <div>
          <br>
        <div  v-for="item in news" style="height:38px;padding:10px 10px 40px 20px;margin:0 20px 20px 20px;border-bottom: 1px dotted  gainsboro;">
          <div style="font-size:22px;float: left;margin-right:60px;">&nbsp;&nbsp;{{item.days}}<p style="font-size: 16px;">{{item.years}}</p></div>
          <div style="margin-top: 10px;"><a href="">{{item.text}}</a></div>
        </div>

        </div>
      </el-col>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "comIndex",
      data(){
          return{
            that:this,
            text:'杭州聚而禾土地规划设计咨询有限公司创建于2016年6月，位于杭州西湖区的黄龙商圈。具有土地规划、摄影测量与遥感、地理信息系统工程、工程测量、不动产测绘、不动产登记代理、土地勘测、林业调查规划设计、城乡规划编制、文物保护工程等行业资质。公司注册资本金1005万，公司自成立以来，累计承接项目上千万。' +
          '公司致力于土地调查评价、规划设计、政策咨询、项目前期服务、地理信息系统的技术开发、测绘技术、农林业调查与规划设计等业务领域，服务于各级国土、农业、林业、交通、水利等政府机关和企事业单位',

            news:[
              {days:'20',years:'2019-1',text:'天津市武清区土地二级市场试点项目顺利通过部级验收'},
              {days:'21',years:'2019-1',text:'文章标题风景园林设计文化的认识和实践体会'},
              {days:'22',years:'2019-2',text:'文章标题风景园林设计文化的认识和实践体会'},
            ]
          }


      },

    }
</script>

<style scoped>

</style>
