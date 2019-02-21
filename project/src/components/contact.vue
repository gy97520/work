<template>
  <div>
    <navs></navs>
    <div class="conta" >

        <div class="header-title" style="text-align: center;padding-top:300px;padding-left: 80px;text-shadow: 1px 1px 1px rgba(16,16,16,0.8);line-height: 30px">
          <h1 style="font-size: 30px;font-weight: 700">CONTACT US</h1>
          <h2 class="h2" >联系我们</h2>
          <h4 class="h4" style="margin-top: 45px;margin-bottom: 30px;font-size: 21px;font-weight: 700;color: rgb(108, 221, 216);"> 公司地址：杭州市西湖区天目山路160号国际花园西写字楼18A
            <br>     <br>   联系电话：0571-87670321</h4>

          <!--  <img src="img/dt.png">-->
        </div>


    </div>
  </div>
</template>

<script>

  import navs from './common/navs';

    export default {
      components: {

        navs
      },
        name: "contact"
    }
</script>

<style scoped>
h1,h2{
  color: white;
  font-size: 36px;
}

</style>
