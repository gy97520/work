<template>
  <div>
    <div class="culture">
     <!-- <Sheader></Sheader>-->
        <div  style="width:450px;margin:0 auto;padding-top: 200px;">
          <div>
            <icon name="map-marker" scale="1" style="color:orangered"></icon>
             &nbsp;&nbsp;地址：杭州市西湖区天目山路160号国际花园西写字楼18A
          </div>
          <br>
          <br>
          <div>
            <icon name="phone" scale="1" style="color:orangered"></icon>
            &nbsp;联系电话：0571-87670321
          </div>
          <br>
          <br>
          <div>
            <icon name="bus" scale="1" style="color:orangered"></icon>
            &nbsp;联系电话：0571-87670321
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Sheader from './common/sheader';
    export default {
        name: "contact",
      components:{
        Sheader,
      },
    }
</script>

<style scoped>


</style>
