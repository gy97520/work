<template>
  <div id="app"  style="width: 1180px;margin: 0 auto">
    <!--    <img src="./assets/logo.png">-->
    app<br>
    <!--路由容器-->
    <router-link to="/home">home</router-link>
    <router-link to="/film">film</router-link>
    <router-link to="/login">card</router-link>
    <router-view></router-view>
    <vheader></vheader >
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">
        <el-row>
          <el-col :span="4">
           <div><img src="../../build/logo.png" height="100" width="100"/></div>
         </el-col>
          <el-col :span="12">
            <div>
              <a href="">买房必看 出门地 铁 口 毛坯三房 满两年 南北通透 楼层好</a>
              <p class="details-item tag">
               1室1厅1卫 <span>|</span>3221平米 <span>|</span>1层 <span>|</span> <i
                class="fa fa-user-o"></i>张亮
              </p>
              <p>赞成首府(商住楼)  余杭-临平-世纪大道</p>
          </div>
          </el-col>
          <el-col :span="7" style="text-align: right"><h2 style="color: red;">299万元</h2></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  <h2 >{{info.shoeName||''}}</h2>

    <div>

      <button @click="showCont">点击隐藏再点显示</button>

      <div v-if="shows">hello world</div>

    </div>

    <div>

      <h2 class = "animated fadeInUpBig">我会动</h2>
     <img v-for="(index) in  5" :src="current_index<index?img_src[1]:img_src[0] " height="51" width="51" @mouseover ="change(index,0)" @mouseout="change(0,1)" @click="change(index,2)" >

    </div>


    <img v-for="(item,index) in imgs" :src="item"  :preview="index" :preview-text="'描述文字'+index" style="width: 200px" class = "animated fadeInUpBig">



    <!--{{ this.$jk.info.shoeName}}-->
 <!-- <div>
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

 &lt;!&ndash;   <section v-else>
      <div v-if="loading">Loading...</div>

      <div
        v-else
        v-for="currency in info"
        class="currency">
        {{ this.$jk.currency.description }}:
        <span class="lighten">
        <span v-html="currency.symbol"></span>{{ this.$jk.currency.rate_float | currencydecimal }}
      </span>
      </div>

    </section>&ndash;&gt;
    </div>
  </div>-->
  </div>
</template>

<script>
  import vheader from './vheader'
  export default {
    data () {

      return {
        info: '',
        loading: true,
        errored: false,
        shows:true,

        img_src: [this.$img.star_true,this.$img.star_false],
        imgs:[this.$img.a1,this.$img.a2],
        current_index:-1,
        isClick:false,
        getClickIndex:-1,

      }

    },
  /*  filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },*/
    methods:{
  showCont(){

    this.shows = !this.shows;

  },
      change(index,type) {
    if(type===0)
    {
      this.current_index = index;

    }
    else if(type === 1) {

         if (this.isClick === false)
          {
            this.current_index = -1;
          }
     else if(this.getClickIndex !== -1){

        this.current_index = this.getClickIndex;
      }
        }
    else if(type===2){
      this.isClick=true;
      this.current_index=index;
     this.getClickIndex=index;
    }

      },


   /*   change(index,type) {
        if(type===0)
        {
          this.current_index = index;
          this.isClick = false;
        }
        else if(type===1&&this.isClick===false){
          if(this.getClickIndex!==-1){
            this.current_index=this.getClickIndex;
          }
          else { this.current_index=-1;}
        }
        else if(type===2){
          this.isClick=true;
          this.current_index=index;
          this.getClickIndex=index;
        }

      },
      */

},

    components:  { vheader },
    mounted () {
      this.$ajax
        .get(this.$jk.getBrandsDetail)
        .then(response => {
          this.info = response.data.data.brandShoe;
          console.log(response.data);
         })
        .catch(error => {
          console.log(error)
          this.errored = true
        })

    }

  }


</script>

<style>
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/

  html,body{
    width:100%;
    height: 100%;
  }
</style>

