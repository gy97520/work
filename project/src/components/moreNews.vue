<template>
  <div class="container" >
    <hnavs></hnavs>
    <div class="row"></div>
    <el-row>

      <el-col :span="24" style="background:white;">
        <div>
          <br>
          <div  v-for="item in news" style="height:38px;padding:10px 10px 40px 20px;margin:0 20px 20px 20px;border-bottom: 1px dotted  gainsboro;">
            <div style="font-size:22px;float: left;margin-right:60px;">&nbsp;&nbsp;{{item.days}}<p style="font-size: 16px;">{{item.years}}</p></div>
            <div style="margin-top: 10px;"><a href="">{{item.text}}</a></div>
          </div>

        </div>
      </el-col>
    </el-row>
    <vfooter></vfooter>
  </div>

</template>

<script>
  import hnavs from './common/Hnavs';
  import vfooter from './common/vfooter';
  export default {
    components: {
      hnavs,
      vfooter,
    },
      data() {
        return {
          that: this,
          news: [
            {days: '20', years: '2019-1', text: '天津市武清区土地二级市场试点项目顺利通过部级验收'},
            {days: '21', years: '2019-1', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
            {days: '22', years: '2019-2', text: '文章标题风景园林设计文化的认识和实践体会'},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
