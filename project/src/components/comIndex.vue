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
          <br><br><br><br><br><br><br>
          <div  style="color: white" @click="that.$jk.getDescribe('/oneHeader')">MORE+</div>
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
    <el-row>

      <el-col style="text-align: center;">
        <br><br>
        <h2>业务体系</h2>
        <p>Business area</p>
      </el-col>
    </el-row>

    <el-row :gutter="20">

      <div v-for="(item,index) in lingyu">
      <el-col :span="3" style="text-align: center;margin-top: 32px; margin-left: 40px">
        <div style="width:90px;height:90px;border-radius: 45px;background-color:black" @mouseover="enter(index)" :class="{rrred:isChange===index}" @mouseleave="leave()">
          <div class="bac" style="width: 80px;height: 80px;border-radius: 40px;background-color:white;margin: 0 auto;position: relative; top:5px;font-size: 40px;line-height:80px;"  @mouseover="enter(index)" :class="{rred:isChange===index}" @mouseleave="leave()">
            <icon :name="item.name_icon" scale="2"></icon>
          </div>
        </div>
      </el-col>

      <el-col :span="4">
        <h4>{{item.title}}</h4>
        <p style="font-size: 12px">{{item.Etitle}}</p>
        <div>{{item.text}}</div>
      </el-col>

      </div>
    </el-row>
    <el-row>
      <br>
     <input type="button" value="查看更多" style="width:150px;height:50px;border:2px solid black;background:transparent;margin-right: 0px;margin-left: 820px;font-weight: 700;">
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
            ],
           lingyu:[
              {name_icon:'flag',title:'调查与测绘类业务',Etitle:'Survey and mapping business.',text:'土地勘测定界,农村存量建设用地调查,工业用地调,地籍调查,农村土 地承包经营权调查,林地资源调查......'},
              {name_icon:'pen',title:'规划类业务',Etitle:'Planning business',text:'农村土地整治规划、土地利用总体规划、 低效用地再开发规划、农村土地再开发规划......'},
              {name_icon:'globe',title:'评价与评估类业务',Etitle:'Evaluation and evaluation of the business.',text:'城市集约利用评价、开发区士地节约集约利用评价、 城市基准地价评价......'},
            ],
            isChange:-1,

          }


      },
      methods: {

        enter: function (index) {
          this.isChange = index;

        },
        leave: function () {
          this.isChange = -1;
        },


          }



    }
</script>

<style scoped>
  .rred{
    color: white;
    background-color: #1fa67a !important;
  }
  .rrred{

    background-color:#95ccba !important;
  }

</style>
