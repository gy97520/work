<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime"  value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.startTime" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          startTime: '',
          endTime: '',
          delivery: false,
          type: [],

          desc: ''
        }
      }
    },
    methods: {

      onSubmit() {

        const type= this.form.type.join(',');
        this.$ajax({
          method: 'post',
          url:this.$jk.sendMessage,
          data: {...this.form,'type':type}

        })
          .then(response => {
           /* this.info = response.data.data.brandShoe;
            console.log(response.data);*/
          if(response.data.code==="success"){
            alert('成功')
          }
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })

        console.log('submit!');

      }

    },

    watch:{
      form:{//深度监听，可监听到对象、数组的变化
        handler(val, oldVal){
console.log(this.form.type)

        },
        deep:true
      }

    }
  }
</script>

<style scoped>

</style>
