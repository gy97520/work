<template>

    <div class="culture">
      <br>
      <div style="text-align: center;font-size: 20px;font-weight: 700">管理团队</div>
      <div style="width:870px;height:430px;margin-top: 15px;">
        <ul class="tx-team" style="overflow: hidden;">
          <li v-for="(item,index) in datas[currentKey]" class="people" style="border: 1px solid  #80808026;width:311px;height:420px;background:rgba(172, 189, 174, 0.38);">
            <img :src="item.img"  style="margin-top:30px;border-radius:60px;width:120px;height:120px;margin-left: 100px;">
            <p>{{item.name}}</p>
            <p></p>
            <p>{{item.work}}</p>
            <p id="hid">{{item.introduce}}</p>
          </li>

        </ul>
      </div>
      <div style="width:864px;height:80px;text-align: center;margin-top: 20px;overflow: hidden">
        <input v-for="(item,index) in ['第一页','第二页','第三页']" type="button" :value="item"  @click="a(index)" style="width:100px;height:40px;margin:20px 30px 0 10px;background:rgba(172, 189, 174, 0.38);border: none;font-weight: 700">
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
            {img: this.$img.huodong,name:'孟 雷',work:'COO兼总经理',introduce:'2009年加入Netconcepts负责公司整体运营。加入Netconcepts前，孟雷曾在出版行业任职5年，参与部级出版物的编辑策划工作及交通行业国内外专家交流等项目。'},
            {img: this.$img.huodong1,name:'马小婷',work:'CAO兼高级市场总监',introduce:'精于把握市场机遇制定、控制、调整和修正战略、提出不同于传统模式的创新性合作方式，最终合理有效实施。'},
          ],
          second: [
            {img: this.$img.huodong3,name:'孟 雷',work:'',text:''},
            {img: this.$img.huodong4,name:'孟 雷',work:'',text:''},

          ],
          three: [
            {img: this.$img.huodong6,name:'孟 雷',work:'',text:''},
            {img: this.$img.huodong7,name:'孟 雷',work:'',text:''},

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
  .tx-team li {
    float: left;
    margin-right: 70px;
    margin-left:29px;
  }
  .people p{
    text-align: center;
  }
  #hid{
    margin-left: 20px;
    margin-right: 20px;
  }

</style>
