<template>
  <div>
<div class="culture">
  <br>
  <br>
  <div style="text-align: center;font-size: 20px;font-weight: 700;">资质荣誉</div>
  <br>
  <article class="jq22-container" >
    <div class="content">
      <div class="chroma-gallery mygallery">
        <img :src="item" alt="Pic 1" v-for="(item,index) in imgsArr" data-largesrc="zheng/m1.jpg"  :preview="index" :preview-text="'描述文字'+index" style="margin-left: 20px;margin-bottom:20px">
      </div>
    </div>
  </article>
</div>
</div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import $ from 'jquery'
    export default {
      components: {
        vueWaterfallEasy
      },
      that:this,
      name: "enterpriseQualification",
  mounted()
  {
    $(".mygallery").chromaGallery ({
      color: '#000',
      gridMargin: 15,
      maxColumns: 5,
      dof: true,
      screenOpacity: 0.8
    });
  },

      data () {
        return {
          imgsArr: [this.$img.m1,this.$img.m2, this.$img.m3, this.$img.m4, this.$img.m5, this.$img.m6,this.$img.m7,this.$img.m8,this.$img.m9,this.$img.m10], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
          fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
        }
      },
      methods: {
        fetchImgsData () { //获取新的图片数据的方法，用于页面滚动满足条件时调用
          this.imgsArr = this.imgsArr.concat(this.fetchImgsArr) //数组拼接，把下一批要加载的图片放入所有图片的数组中
        }
      },

    }
</script>

<style scoped>

img{
  width:200px;
}
.content
{
  width:100%;
  height: 100%;
  margin: 10px auto;
}
@media screen and (min-width: 980px) /* Desktop */ {
  .content {
    width: 100%;
  }
}
.mygallery
{
  margin: 15px auto;
}
</style>
