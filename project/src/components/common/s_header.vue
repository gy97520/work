<template>
    <div class="s_header">
      <el-carousel :interval="8000" arrow="always" height='500px' >
        <el-carousel-item v-for="item in carousel_img" :key="item" style="width: 100%"  height="600px"  >
          <img :src="item" alt="" style="width: 100%;"  height="600px" >
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>


    export default {
        components: {

        },
        name: "s_header",
        data() {
          return{
            carousel_img:[this.$img.slide1,this.$img.slide2, this.$img.slide3]

          }




        },
        methods: {

        },
        mounted() {

        },

    }
</script>

<style scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

