<template>


  <div style="width: 1617px;margin: 0 auto;">

    <hnavs></hnavs>
    <div class="clearfix">
    <div class="left_nav" style="float: left">
      <h2>走进聚而禾</h2>
      <ul class="lefu">
        <router-link to="/pr" tag="li"><a href="">公司简介</a></router-link>
        <router-link to="/cu" tag="li"><a href="">公司文化</a></router-link>
        <router-link to="/org" tag="li"><a href="">组织架构</a></router-link>
        <router-link to="/pr" tag="li"><a href="">资质荣誉</a></router-link>
        <router-link to="/man" tag="li"><a href="">管理团队</a></router-link>
        <router-link to="/team" tag="li"><a href="">团队风采</a></router-link>
      </ul>

    </div>
  <!--<router-view></router-view>-->
      <transition name="move" mode="out-in">
        <router-view/>
      </transition>
    </div>

    <div style="height:300px;background: black;margin-top: 20px;">

    </div>

  </div>


</template>

<script>
  import hnavs from './Hnavs';
  export default {
      components: {
      hnavs
    },
    data() {
      return {
        activeIndex: '1',
        listData: [],

        oneDetail: [
          {value: '公司简介', path: 'index'},
          {value: '公司文化', path: 'film', id: 0},
          {value: '组织架构', path: 'login'},
          {value: '资质荣誉', path: 'about_culture', id: 1},
          {value: '管理团队', path: 'join_us'},
          {value: '团队风采', path: 'contact_us'},
        ],
        twoDetail: [
          {value: '业务领域', path: 'index'},
          {value: '项目成果', path: 'film', id: 0},
          {value: '产品展示', path: 'login'},
          {value: '解决方案', path: 'about_culture', id: 1},
          {value: '技术支持', path: 'join_us'},

        ],
      }
    },
    methods: {


    }
  }
</script>

<style scoped>
  .nav {
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
  }
  .nav ul{
    list-style: none;
    width:1200px;
    margin: 0 auto;
  }
  .nav li{
    float:left;
    margin-right: 60px;
    color:#636363;
    height:55px;
    line-height: 55px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .nav .active{
    border-bottom:2px solid #32cd32 !important;
  }
  .sNav {
    height: 101px;
    width: 45%;
    background: white;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 7.5px;
    border-radius: 3px;
  }
 .left_nav h2{
    font-size: 22px;
    height: 70px;
    background: white;
    line-height:70px;
  }
  .left_nav{

    width: 300px;
    height:590px;
    background: rgba(252, 252, 252, 0.86);
    border: 1px solid #dedede;

  }
  h2{
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .lefu{
    width:100%;
    margin-left: -40px;
  }
  .lefu li{
    height: 60px;
    line-height: 60px;

  }
  .lefu li:hover{
    background: #eeeeee;

  }
  .lefu li a{
    width:100%;
    display: inline-block;
    text-align: center;
  }
  .lefu li a:hover{
    text-decoration: none;
  }
</style>
