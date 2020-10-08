<template></template>
<script>
//data：决定了级联面板的内容。
//value：当前选择项，可使用v-model。
//disabled：是否禁用。
//clearable：是否可清空。
//placeholder：占位提示。
//size：尺寸（iView 多数表单类组件都有尺寸）。
//trigger：触发方式（点击或鼠标滑入）。
//changeOnSelect：选择即改变。
//renderFormat：自定义显示内容。
export default {
  name: "casitem",
  props:{
      data:{
          type:Array,
          default(){
              return [];
          }
      },
      value:{
          type:Array,
          default(){
              return [];
          }
      },
      disabled:{
          type:Boolean,
          default:false,
      },
      clearable:{
          type:Boolean,
          default:true
      },
      placeholder:{
          type:String,
          default:'请选择'
      },
      size:{
          validator(value){
              return oneOf(value,['small','large']);
          }
      },
      trigger:{
          validator(value){
              return oneOf(value,['click','hover'])
          },
          default:'click'
      },
      changeOnSelect:{
          type:Boolean,
          default:false
      },
      renderFormat:{
          type:Function,
          default(label){
              return label.join('/');
          }
      }
  }
};
</script>
<style scoped>
</style>