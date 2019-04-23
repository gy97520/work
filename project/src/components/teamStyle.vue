<template>

  <div class="culture">
    <br>
    <br>
    <div style="text-align: center;font-size: 20px;font-weight: 700">团队风采</div>
    <div style="width: 1300px;height:430px;">
       <ul class="tx-team" style="overflow: hidden;margin-left: 20px">
      <li v-for="(item,index) in datas[currentKey]">
        <span class="tx-float">
          <img :src="item.img"  style="margin-top:20px;">
        </span>
        <span class="text">
          <h3 style="background: #eeeeeee3">{{item.tit}}</h3>
        </span>
      </li>

    </ul>
    </div>
      <div style="width: 1300px;height:80px;text-align: center;margin-top:15px;overflow: hidden">
       <input v-for="(item,index) in ['第一页','第二页','第三页']" type="button" :value="item"  @click="a(index)" style="width:100px;height:40px;margin:0 30px 0 10px;background:rgba(172, 189, 174, 0.38);border: none;font-weight: 700">
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeName2: 'first',
        currentKey:'first',
        datas:{
        first: [
          {img: this.$img.huodong,tit:'相亲相爱一家人'},
          {img: this.$img.huodong1,tit:'烤串'},
          {img: this.$img.huodong2,tit:'开会仪式'},

        ],
        second: [
          {img: this.$img.huodong3,tit:'干活'},
          {img: this.$img.huodong4,tit:'户外活动'},
          {img: this.$img.huodong5,tit:'户外烧烤'},

        ],
          three: [
            {img: this.$img.huodong6,tit:'相亲相爱一家人'},
            {img: this.$img.huodong7,tit:'户外活动'},
            {img: this.$img.huodong8,tit:'户外烧烤'},

          ],
        that:this,
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      a(index){
        this.i=index;
        switch (index){
          case 0:this.currentKey='first';return;
          case 1:this.currentKey='second';return;
          case 2:this.currentKey='three';return;

        }
      }
    }
  };
</script>
<style scoped>
  .tx-float img {
    width: 300px;
    height: 360px;
    margin-right: 15px;
    cursor: default;
  }
  .tx-team li {
    float: left;
    margin-left: 70px;
  }
  .tx-team1 input{
    width:90px;
    height:40px;
  }
  .text h3 {
    position: relative;
    top: -78px;
    left: 0px;
    width: 300px;
    color: black;
    height: 55px;
    line-height: 55px;
    background: #eeeeeee3;
    text-align: center;
    cursor: default;
  }
</style>
