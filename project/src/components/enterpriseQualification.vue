<template>
  <div>
<div class="culture">
<!--  <vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData"></vue-waterfall-easy>-->
  <h4 style="text-align: center">资质荣誉</h4>
  <article class="jq22-container" >
    <div class="content">
      <div class="chroma-gallery mygallery"  >
        <img :src="item" alt="Pic 1" v-for="(item,index) in imgsArr" data-largesrc="zheng/m1.jpg"  :preview="index" :preview-text="'描述文字'+index" >

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
      name: "enterprise qualification",

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
   /*   props: {
        gap: { // 图片间隔
          type: Number,
          default: 20
        },
        maxCols: { // 最大的列数
          type: Number,
          default: 5
        },
        imgsArr: { // 请求返回的图片数据，格式：[{src:'1.jpg','link':'url1' info:'自定义图片信息'},{src:'2.jpg','link':'url2',info:'自定义图片信息'}...]
          type: Array,
          required: true

        },
        imgWidth: { // 指定图片的统一宽度
          type: Number,
          default: 240
        },
        timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
          type: Number,
          default: 500
        }
      },*/
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
/*img{
  width: 200px;
}*/
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
