<template>
<div>
{{text}}
  <cascader :data="data" @on-change="handleChange" v-model="value">
    <a href="javascript.void(0)">选择</a>
  </cascader>
  </div>
</template>
<script>
import cascader from "./cascader";
export default {
  components: { cascader },
  data() {
    return {
      text:"未选择",
      value: ["jiangsu", "suzhou", "zhuozhengyuan"],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods:{
    handleChange(value,selectedData){
      this.text=selectedData.map(o=>o.label).join(',');
    }
  }
};
</script>
<style scoped>
</style>