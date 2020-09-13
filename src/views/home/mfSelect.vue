<template>
  <div>
    <y-pre-form style="padding:40px 20px 30px 20px" :model="formData" labelPosition="top" :span="2" :inline="true">
        <el-form-item label="上级">
            <y-select :filter="filter" optionsPath="LOCALE" v-model="formData.locale">
            </y-select>
        </el-form-item>
        <el-form-item label="编码" prop="code">
            <el-input defaultValue="" v-model="formData.code">
            </el-input>
        </el-form-item>
    </y-pre-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      filter:{"params": {"asOfDate": "20200817"}}
    };
  },
  beforeCreate(){
    console.log(this.$JSONLayoutConfig)
  }
};
</script>
<style scoped>
</style>