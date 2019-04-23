<template>
  <div class="culture">
    <br>
    <div style="text-align: center;font-size: 20px;font-weight: 700">项目成果</div>
    <div class="row share" style="margin-left: 33px;">
      <ul>
        <li class="hit1"><img src="../assets/images/project result/cehui.jpg"/>
          <div class="cen1">
            <div id="share_txt1-1" class="share_txt1-1" >  <p style="text-align: center;margin-bottom: 0px">调查与测绘类业务</p>
              <span>（1）永康市农村存量建设用地调查项目；</span>
              <br>（2）<span>云和县土地变更调查项目；</span>
              <br>（3）<span>缙云县土地变更调查项目；</span>
              <br>（4）<span>新建杭州至绍兴至台州铁路建设项目绍兴段土地勘测定界；</span>
              <br>（5）<span>宁波市高新区工业用地调查；</span>
              <br>（6）<span>海宁市黄湾镇农经权调查。</span>
            </div>
          </div>
        </li>
        <li class="hit2"><img src="../assets/images/project result/qqgh1.jpg"/> <div class="cen1">
          <div id="share_txt1-2" class="share_txt1-1" >
            <p style="text-align: center;margin-bottom: 0px">规划类业务</p>
            <span>（1）庆元县兰溪桥水上针叶林森林公园规划；</span>
            <br> <span> （2）庆元县申报国家森林特色小镇试点县建设概念性规划；</span>
            <br> <span> （3）新建杭州经绍兴至台州铁路（天台段）所涉土地利用总体规划修改落实方案；</span>
            <br> <span> （4）新建杭州经绍兴至台州铁路（临海段）所涉土地利用总体规划修改落实方案；</span>
            <br> <span> （5）新建杭州经绍兴至台州铁路（温岭段）所涉土地利用总体规划修改落实方案；</span>
            <br> <span> （6）新建杭州经绍兴至台州铁路（上虞段）所涉土地利用总体规划修改落实方案；</span>
            <br> <span> （7）椒江区中心城区土地利用总体规划（2006-2020年）2017年第2次规划落实方案。</span>
          </div>
        </div></li>
        <li class="hit3"><img src="../assets/images/business area/tdpg1.jpg"/><div class="cen1">
          <div id="share_txt1-3" class="share_txt1-1">
            <p style="text-align: center">评价与评估类业务；</p>
            <span> （1）桐庐县健康城建设项目节地评价；</span>
            <br> <span> （2）新建浙江丽水机场建设项目节地评价；</span>
            <br> <span> （3）淳安县石林源毛竹源项目节地评价；</span>
            <br> <span> （4）淳安县青溪新城坪山项目节地评价。</span>
          </div>
        </div>
        </li>
      </ul>
    </div>
    <div class="row share" style="margin-left: 33px;">
      <ul>
        <li class="hit4"><img src="../assets/images/business area/ggzc.jpg"/>
          <div class="cen1">
            <div id="share_txt1-4" class="share_txt1-1" >  <p style="text-align: center">公共政策咨询业务</p>
              <span>   （1）浙江省规范工业用地管理政策研究；</span>
              <br>  <span>  （2）天津市武清区土地二级市场试点政策研究；</span>
              <br>   <span> （3）宁波市土地二级市场试点政策研究；</span>
              <br>  <span> （4）德清县土地二级市场试点政策研究；</span>
              <br> <span> （5）宁波高新区存量工业用地收储可行性研究；</span>
              <br>  <span> （6）宁波高新区2.5产业用地管理政策研究；</span>
              <br> <span> （7）缙云县城镇基准地价研究项目。</span>
            </div>
          </div>

        </li>
        <li class="hit5"><img src="../assets/images/project result/77.png"/> <div class="cen1">
          <div id="share_txt1-5" class="share_txt1-1">
            <p style="text-align: center">地理信息工程类业务</p>
            <span> （1）天津市武清区土地二级市场网上交易平台开发 ；</span>
            <br> <span>（2）浙江省国土资源厅土地使用权网上交易模式研究项目。</span>
          </div>
        </div></li>
        <li class="hit6"><img src="../assets/images/project result/qqgh3.jpg"/><div class="cen1">
          <div id="share_txt1-6" class="share_txt1-1">
            <p style="text-align: center">项目前期服务业务</p>
            <span>（1）新建杭州至绍兴至台州铁路建设项目先期开工段用地报批；</span>
            <br> <span>（2）新建杭州至绍兴至台州铁路建设项目用地报批； </span>
            <br> <span>（3）新建杭州至绍兴至台州铁路建设项目用林报批；</span>
            <br> <span>（4）浙中绿谷天堂教育共创园申报浙江省“坡地村镇建设”试点项目和用地报批工作；</span>
            <br> <span>（5）215省道缙云县城至方溪段公路工程前期服务项目。</span>
          </div>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "projectResult",
      mounted(){
        $(".hit1").on("mouseenter",function() {

          $("#share_txt1-1").css({height: "35px", top: "100px"}).animate({height: "200px", top: "25px"}, 500)
            .css("display","block")
        })
        $(".hit1").on("mouseleave",function() {

          $("#share_txt1-1").css({height: "200px", top: "25px"}).animate({height: "35px", top: "100px"}, 500)

        })
        $(".hit2").on("mouseenter",function() {

          $("#share_txt1-2").css({height: "35px", top: "100px"}).css("overflow-y","scroll").animate({height: "200px", top: "25px"},  500)
            .css("display","block")
        })
        $(".hit2").on("mouseleave",function() {

          $("#share_txt1-2").css({height: "200px", top: "25px"}).css("overflow","hidden").animate({height: "35px", top: "100px"},  500)

        })
        $(".hit3").on("mouseenter",function() {

          $("#share_txt1-3").css({height: "35px", top: "100px"}).animate({height: "200px", top: "25px"},  500)
            .css("display","block")
        })
        $(".hit3").on("mouseleave",function() {

          $("#share_txt1-3").css({height: "200px", top: "25px"}).animate({height: "35px", top: "100px"},  500)

        })
        $(".hit4").on("mouseenter",function() {

          $("#share_txt1-4").css({height: "35px", top: "100px"}).css("overflow-y","scroll").animate({height: "200px", top: "25px"},  500)
            .css("display","block")
        })
        $(".hit4").on("mouseleave",function() {

          $("#share_txt1-4").css({height: "200px", top: "25px"}).css("overflow","hidden").animate({height: "35px", top: "100px"},  500)

        })

        $(".hit5").on("mouseenter",function() {

          $("#share_txt1-5").css({height: "35px", top: "100px"}).animate({height: "200px", top: "25px"},  500)
            .css("display","block")
        })
        $(".hit5").on("mouseleave",function() {

          $("#share_txt1-5").css({height: "200px", top: "25px"}).animate({height: "35px", top: "100px"},  500)

        })
        $(".hit6").on("mouseenter",function() {

          $("#share_txt1-6").css({height: "35px", top: "100px"}).css("overflow-y","scroll").animate({height: "200px", top: "25px"},  500)
            .css("display","block")
        })
        $(".hit6").on("mouseleave",function() {

          $("#share_txt1-6").css({height: "200px", top: "25px"}).css("overflow","hidden").animate({height: "35px", top: "100px"},  500)

        })
      },
    }
</script>

<style scoped>
  .titl_h4 {
    text-align: center;
    color: #333333;
    margin-top: 10px;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .share{
    text-align: center;
    height: 259px;

  }
  .share ul{
    list-style: none;
    width: 1400px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
  }
  .share ul li{
    float: left;
    width: 400px;
    height: 200px;
    margin-left: 0px;
    text-align: left;
    padding-left: 0px;
    padding-top: 20px;
    font-size: 13px;
  }
  .share ul li img{
    float: left;
    width: 380px;
    height: 236px;
  }
  .cen1{
    width:350px;
    height: 200px;
    position:relative;
    left: 20px;
    top:0px;

  }
  .share_txt1-1{
    overflow: hidden;
    width: 350px;
    height: 35px;
    top:100px;
    position:absolute;
    left: 0;
    padding-left: 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.21);

  }
  .share_txt1-1 p{
    color: white;
    font-size: 16px;
    font-weight: 700;

  }
  .share_txt1-1 span{
    line-height: 22px;
  }
</style>
