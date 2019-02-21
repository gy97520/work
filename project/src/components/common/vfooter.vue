<template>
    <div class="footer ">
        <div>
            <div class="w_main align_between">

                <div class="right">
                    <ul class="list">
                        <li style="border-bottom:2px solid #ff6400">快速通道</li>
                        <li v-for="item in data.aboutUs">
                            <a @click="that.$jk.getDescribe(item.path)">{{item.name}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>&nbsp;</li>
                        <li v-for="item in data.trends">
                            <a @click="that.$jk.getDescribe(item.path)">{{item.name}}</a>
                        </li>
                    </ul>

                    <ul class="list">
                        <li>&nbsp;</li>
                        <li v-for="item in data.sNav">
                            <a @click="that.$jk.getDescribe(item.path)">{{item.name}}</a>
                        </li>

                    </ul>

                    <ul class="list">
                        <li style="border-bottom:2px solid #ff6400">联系我们</li>
                        <li v-for="item in data.contact">
                          <icon :name="item.name_icon"></icon>&nbsp;&nbsp;<a>{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright" style="background: black">
              版权所有 (c) 2018 杭州聚而禾土地规划设计咨询有限公司
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        data() {
            return {
                data: {
                    aboutUs: [
                        {name: '集团简介', path: 'pr'},
                        {name: '公司文化', path: 'cu'},
                        {name: '组织架构', path: 'org'},
                        {name: '资质荣誉', path: 'cu'},
                        {name: '管理团队', path: 'man'},
                        {name: '团队风采', path: 'team'},
                    ],
                    trends: [
                        {name: '业务领域', path: 'bu'},
                        {name: '项目成果', path: 'result'},
                        {name: '产品展示', path: 'news_list'},
                        {name: '解决方案', path: 'solution'},
                        {name: '技术支持', path: 'news_list'},
                        {name: '解决方案', path: 'news_list'},
                        ],
                    sNav:[
                        {name: '招贤纳士', path: 'em'},
                        {name: '关于我们', path: 'contact'},

                  ],
                    contact:[
                    {name:"浙江省杭州市西湖区天目山路160号国际花园西写字楼18A",name_icon:'home',},
                    {name:"0571-87670985",name_icon:'phone',},
                    {name:"313583016@qq.com",name_icon:'credit-card',},
                  ]

                },

                that:this,
                selectTar:0
            }
        },
        methods: {
            monitorRouter() {
                window.scrollTo(0, 0);
            },

        },
        mounted() {
            this.monitorRouter();
            this.that = this;

        },
        watch: {
            '$route': 'monitorRouter'
        },
    }
</script>

<style scoped>
  .align_between{text-align:justify}
  .align_between>div,.align_between>h3,.align_between>p{display:inline-block;vertical-align:top}
  .align_between:after{width:100%;height:0;margin:0;display:inline-block;overflow:hidden;content:''}
.footer ul{
  list-style: none;
}
  * {
    margin: 0;
    padding: 0;
  }

  .w_main {
    width:1100px;
    margin: 0 auto;
  }
    .footer {
        height: 300px;
        color: white;
        padding-top: 50px;
        font-size: 0.8em;
        background:#1a1a1a;
    }

    @media screen and (max-width: 500px) {
        .footer {
            width:100%;
            height: 228px;
            padding: 30px 27px 30px 27px;
            background-color: #595e54;
        }

    }

    .footer .w_main {
        padding-bottom: 30px;

    }


    .right {
        margin-right: 33px;
    }

    .footer a {
        color: white;
    }

    .list {
        float: left;
        margin-left:130px;
    }

    .list li {
        margin-bottom: 15px;

    }

    .list li:nth-of-type(1) {
        font-size: 1.2em;
        padding-bottom: 15px;
        font-weight: bold;
    }

    .fl p {
        padding-top: 5px;
    }

    .copyright {
        height: 45px;
        font-size: 12px;
        line-height: 45px;
        color: #636363;
        background: white;
        width: 100%;
        text-align: center;

    }
</style>
