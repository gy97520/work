<template>
  <div>
    <div :style="{backgroundImage:`url(${newback})`}" style="width:1500px;height:300px;margin: 0 auto;background-position:0 -185px;">
      <Sheader></Sheader>
    </div>
  <div class="container" >

    <div class="row"></div>
    <el-row>

      <el-col :span="24" style="background:white;">
        <div>
          <br>
          <div  v-for="item in news" style="height:200px;padding:10px 10px 40px 20px;margin:0 20px 20px 20px;border:2px solid  gainsboro;">
            <div style="float: left;margin: 25px 40px 0 20px;"><img :src="item.img" style="width:200px;height:175px;"></div>
            <div style="text-align: center">
              <h2>{{item.text}}</h2>
              <p style="padding-right:15px;">一辆12路公交车途经纬一街时，差点与一辆由西向东调头的奔驰车相撞。为此，公交车司机和奔驰车司机发生争执，进而引来奔驰车司机对公交车司机一阵围殴。途经事发路段公交车立即停车围住奔驰车，为被打公交车司机讨说法，不到半个小时，纬一街事发路段已聚集了9辆12路公交车。事发后，公安雁塔分局明德门派出所民警接到报警赶到现场，及时将受伤的公交车司机送往医院治疗。经过民警和闻讯赶来的12路公交车车队工作人员劝说，停放了一个多小时的公交车陆续离开现场。7月11日凌晨，事发路段交通基本恢复畅通。目前，公安雁塔分局明德门派出所已介入调查。</p>
            </div>
          </div>

        </div>
      </el-col>
    </el-row>

  </div>
  </div>
</template>

<script>
  import  Sheader from  '../components/common/sheader'
  export default {

    components:{
      Sheader,
    },
      data() {
        return {
          that: this,
          newback:require("../assets/images/news/beijing.jpg"),
          news: [
            {img:this.$img.slide, text: '天津市武清区土地二级市场试点项目顺利通过部级验收'},
            {img:this.$img.slide2, text: '文章标题风景园林设计文化的认识和实践体会'},
            {img:this.$img.slide3, text: '文章标题风景园林设计文化的认识和实践体会'},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
