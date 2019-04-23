<template>
  <div class="culture">
    <br>
    <div style="text-align: center;font-size: 20px;font-weight: 700">业务领域</div>
    <div class="row share" style="margin-left: 33px;">
      <ul>
        <li class="hit1"><img src="../assets/images/project result/cehui2.jpg"/>
          <div class="cen1">
            <div id="share_txt1-1" class="share_txt1-1" >  <p style="text-align: center">调查与测绘类业务</p>

              <span>（1）土地勘测定界、农村存量建设用地调查、工业用地调&nbsp;&nbsp; &nbsp;查、土地变更调查、地籍调查、农村土地承包经营权调查、 &nbsp; &nbsp;林地资源调查；</span>
              <br> <span> （2）地形测量、工程测量、不动产测绘；</span>
              <br>  <span> （3）不动产权籍调查。</span>
            </div>
          </div>

        </li>
        <li class="hit2"><img src="../assets/images/project result/qqgh.jpg"/> <div class="cen1">
          <div id="share_txt1-2" class="share_txt1-1">
            <p style="text-align: center">规划类业务</p>
            <span>（1）农村土地整治规划、土地利用总体规划；</span>
            <br> <span> （2）低效用地再开发规划、农村土地再开发规划；</span>
            <br>  <span> （3）森林小镇规划、森林公园规划。</span>

          </div>
        </div></li>
        <li class="hit3"><img src="../assets/images/business area/tdpg.jpg"/><div class="cen1">
          <div id="share_txt1-3" class="share_txt1-1">
            <p style="text-align: center">评价与评估类业务</p>

            <span>（1）城市集约利用评价、开发区土地节约集约利用评价；</span>
            <br> <span> （2）城市基准地价评价、征地区片综合评价</span>
          </div>
        </div>
        </li>
      </ul>
    </div>
    <div class="row share" style="margin-left: 33px;">
      <ul>
        <li class="hit4"><img src="../assets/images/business area/ggzc1.jpg"/>
          <div class="cen1">
            <div id="share_txt1-4" class="share_txt1-1" >  <p style="text-align: center">公共政策咨询业务</p>
              <span>（1）土地市场分析、城市地价动态监测、土地利用政策设计、农村土地制度改革政策设计。</span>
            </div>
          </div>
        </li>
        <li class="hit5"><img src="../assets/images/project result/77.png"/> <div class="cen1">
          <div id="share_txt1-5" class="share_txt1-1">

            <p style="text-align: center">地理信息工程类业务</p>

            <span>（1）地理信息软件开发、系统报备存档、规划数据建库、各类信息系统建设。</span>
          </div>
        </div></li>
        <li class="hit6"><img src="../assets/images/project result/qqgh4.jpg"/><div class="cen1">
          <div id="share_txt1-6" class="share_txt1-1">
            <p style="text-align: center">项目前期服务业务</p>
            <span>（1）土地报批、林地报批、水土保持方案编制、压覆矿产资源评估</span>
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
      name: "business area",
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
