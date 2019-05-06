<template>
  <div>
    <div :style="{backgroundImage:`url(${news})`}" style="width:1500px;height:300px;margin: 0 auto;background-position:0 -185px;">
      <Sheader></Sheader>
    </div>
 <div style="width: 1180px;margin: 0 auto;">
        <h2 style="text-align: center">天津市武清区土地二级市场试点项目顺利通过部级验收</h2>
        <div style="margin-bottom:50px">
          <p>9月3日，杭州聚而禾规划有限公司承担的天津市武清区完善建设用地使用权转让、出租、抵押二级市场试点项目部级验收工作在北京举行，自然资源部会同财政部、住建部、农业农村部、中国人民银行、银保监会等部委相关司局和事业单位，邀请部分高校专家，组成验收工作组，听取了武清区试点工作情况汇报。验收组认为天津武清较好地完成了试点各项计划任务，一致同意通过验收。
          </p>
          <p style="text-align: center"><img src="../../assets/images/news/wu1.jpg" height="418" width="663"/></p>
          <p>据了解，试点期间，天津武清围绕实施方案，紧扣“土地节约集约利用”主题，详细调查了5789宗国有建设用地交易情况及现状用地情况，建成了空间数据库，建设了“市场交易潜力库”，为政策制度与交易平台建设提供了坚实的数据基础。积极深化政策创新，出台了《天津市武清区国有建设用地使用权转让出租抵押二级市场管理办法（试行）》和五个配套实施细则，形成“办法为引领，五细则支撑”的二级市场管理政策体系。按照“群众少跑路、交易更省心、监管无死角”的市场建设目标，建成了线上线下一体化市场。</p>

          <p  style="text-align: center"><img src="../../assets/images/news/wu2.png" height="371" width="664"/></p>
          <p>受试点政策激励，近两年天津武清土地二级市场十分活跃。以土地转让和抵押交易为例，与2016年相比，2017年土地转让成交数量增长了160%，成交面积增长了36.75%；土地抵押数量增长了1.31%，抵押面积增长27.24%。
            部验收工作组认为，天津武清按时完成了试点各项任务，成果资料详实丰富，通过试点，有效激发了市场活力，规范了市场秩序，成效显著。特别是对全区存量建设用地进行了摸底调查，建立了市场交易潜力库，把土地二级市场试点与城镇低效用地管理相结合，通过分割转让等方式盘活存量工业用地等相关实践值得肯定。
          </p>
          <p  style="text-align: center"><img src="../../assets/images/news/wu3.png" height="420" width="663"/></p>
          <p >部验收工作组强调，完善土地二级市场试点是一项长期任务，武清区要持续深入地推进土地二级市场建设。本次试点中，武清区探索制定的土地二级市场制度框架、不突破现有法律规定的改革举措可继续执行。</p>
        </div>
      </div>
  </div>
</template>

<script>
  import  Sheader from  '../../components/common/sheader'
    export default {
        name: "oneNew",
      components:{
        Sheader,
      },
      data(){
          return{
            news:require("../../assets/images/news/beijing.jpg"),
          }
      }

    }
</script>

<style scoped>

</style>
