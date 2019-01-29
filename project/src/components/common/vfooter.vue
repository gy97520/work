<template>
    <div class="footer ">
        <div>
            <div class="w_main align_between">

                <div class="contact">
                    <img :src="this.$img.footerLogo" class="logo">
                    <div class="center">
                        <p style="font-size:13px; line-height: 30px;">杭州木木屋网络科技有限公司</p>

                        <img :src="this.$img.IcTel" alt="" class="tel">
                        <span class="bigFont">400-870-1588</span>
                    </div>
                    <div class="fl">
                        <img :src="this.$img.footerWechat" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="fl tm">
                        <img :src="this.$img.footerTmall" alt="">
                        <p>天猫旗舰店</p>
                    </div>
                </div>
                <div class="right">
                    <ul class="list">
                        <li>关于我们</li>
                        <li v-for="(item,index) in data.aboutUs">
                            <a @click="that.$jk.router(item.path,{id:index})">{{item.name}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>公司动态</li>
                        <li v-for="(item,index) in data.trends">
                            <a @click="that.$jk.router(item.path,{id:index})">{{item.name}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>旗下品牌</li>
                        <li v-for="(item,index) in data.brand">
                            <a @click="that.$jk.router('/brands',{id:index+1})">{{item}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>平台合作</li>
                        <li v-for="item in data.cooperate">
                            <a @click="that.$jk.router('/cooperation')">{{item}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>加入我们</li>
                        <li v-for="(item,index) in data.joinUs">
                            <a @click="that.$jk.router('/join_us',{id:index})">{{item}}</a>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>联系我们</li>
                        <li v-for="item in data.contactUs">
                            <a @click="that.$jk.router('/contact_us')">{{item}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                Copyright 2018 杭州木木屋网络科技有限公司 All Rights Reserved.
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
                        {name: '集团简介', path: '/about_us'},
                        {name: '公司文化', path: '/about_culture'},
                        {name: '业务模式', path: '/about_model'},
                        {name: '发展历程', path: '/about_history'},
                        // {name: '品牌物料', path: 'about_materials'},
                    ],
                    trends: [
                        {name: '品牌活动', path: '/news_list'},
                        {name: '媒体报道', path: '/news_list'},],
                    brand: ['乖乖鸭', '毛毛熊', '泰迪公主', '泰迪珍藏', '长颈鹿', '智慧少年'],
                    cooperate: ['天猫', '唯品会', '京东', '拼多多'],
                    joinUs: ['社会招聘', '校园招聘', '品牌合伙人'],
                    contactUs: ['联系方式', '公司地图'],
                },
                sNav:[
                    {name: '关于我们', path: '/navs'},
                    {name: '公司动态', path: '/news_list',id:0},
                    {name: '旗下品牌', path: '/brands',id:1},
                    {name: '平台合作', path: '/cooperation'},
                    {name: '加入我们', path: '/join_nav'},
                    {name: '联系我们', path: '/contact_us'},
                ],
                that: '',
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

  .fl{float:left}
  .fr{float:right}
  .w_main {
    width: 1200px;
    margin: 0 auto;
  }
    .footer {
        height: 300px;
        color: white;
        padding-top: 50px;
        font-size: 0.8em;
        background: #686d68;
    }

    @media screen and (max-width: 500px) {
        .footer {
            width:100%;
            height: 228px;
            padding: 30px 27px 30px 27px;
            background-color: #595e54;
        }

        .bigFont {
            padding-left: 0px !important;
        }

        .listLi {
            width: 100%;
            height: 29px;
            border-bottom: 1px solid grey;
            text-align: right;
            font-size: 12px;
            line-height: 29px
        }
        .listLi:last-child{
            border-bottom: none;

        }
        .green{
            color:#6eb92b;
        }

    }

    .footer .w_main {
        padding-bottom: 30px;

    }

    .contact {
        width: 25%;
        margin-left: 30px;
    }

    .right {
        margin-right: 33px;
    }

    .footer a {
        color: white;
    }

    .list {
        float: left;
        margin-left: 60px;
    }

    .list li {
        /*float:left;*/
        margin-bottom: 15px;

    }

    .list li:nth-of-type(1) {
        font-size: 1.2em;
        padding-bottom: 15px;
        font-weight: bold;
    }

    .logo {
        width: 80px;
    }

    .tm {
        margin-left: 15px;
    }

    .tel {
        width: 13px;
        height: 17px;
    }

    .bigFont {
        font-size: 1.5em;
        line-height: 20px;
        padding-left: 5px;
    }

    .center {
        margin-top: 20px;
        margin-bottom: 10px;

    }

    .fl {
        text-align: center;
        margin-top: 10px;
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
