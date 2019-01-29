<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in list" v-on:mouseenter="aaa(index)">
        {{item.id}}{{item.item}}
        <!--若index == ishow，就添加该window组件-->
        <window :content="content" v-if="index == ishowa"></window>
      </li>
    </ul>

  </div>
</template>

<script>

    export default {
        name: "regist",
      data() {

        return {
          content:"",
          ishowa:null,
          list:[
            {id:1,item:"男人歌"},
            {id:2,item:"唱歌的孩子"},
            {id:3,item:"失恋重修手册"},
            {id:4,item:"paper love"},
            {id:5,item:"oops"},
            {id:6,item:"wild one"},
          ]
        }

      },
      methods:{
        aaa(index){
          this.content = this.list[index].item
          this.ishow = index
        }
      },
    }


</script>

<style scoped>

</style>
