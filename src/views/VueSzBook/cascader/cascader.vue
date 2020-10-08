<template>
   <div :class="classes" v-clickoutside="handleClose">
       <div :class="[prefixCls+'rel']" @click="toggleOpen">
           <slot>
               <i-input
               readonly
               :disabled="disabled"
               v-model="displayRender"
               :size="size"
               :placeholder="placeholder">
               </i-input>
               <icon
               type="ios-close"
               :class="[prefixCls+'-arrow']"
               v-show="showCloseIcon"
               @click.native.stop="clearSelect"></icon>
               <icon
               type="arrow-down-b" :class="[prefixCls+'-arrow']"></icon>
           </slot>
       </div>
       <transition name="slide-up">
           <Drop v-show="visible">
               <div>
                   <caspanel
                   ref="caspanel"
                   :prefix-cls="prefixCls"
                   :data="data"
                   :disabled="disabled"
                   :change-on-select="changeOnSelect"
                   :trigger="trigger"></caspanel>
               </div>
           </Drop>
       </transition>
   </div>
</template>
<script>
import iinput from './input'
import Drop from './dropdowmn'
import icon from './icon'
import caspanel from './caspanel'
import emitter from './emitter'
import { oneOf } from './utils/assist';
import {directive as clickOutside} from 'v-click-outside-x';

const prefixCls = 'ivu-cascader';
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
  name: "cascader",
  mixins:[emitter],
  components:{iinput,Drop,icon,caspanel},
  directives: { clickOutside },
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
  },
  data(){
      return {
          prefixCls:prefixCls,
          visible:false,
          selected:[],
          tmpSelected:[],
          updatingValue:false,
          currentValue:this.value
      }
  },
  computed:{
      classes(){
          return [`${prefixCls}`,{
              [`${prefixCls}-show-clear`]:this.showCloseIcon,
              [`${prefixCls}-visible`]:this.visible,
              [`${prefixCls}-disabled`]:this.disabled
          }]
      },
      showCloseIcon(){
          return this.currentValue && this.currentValue.length && this.clearable && !this.disabled
      },
      //自定义显示内容
      displayRender(){
          let label=[];
          for(let i=0;i<this.selected.length;i++){
              label.push(this.selected[i].label);
          }
          return this.renderFormat(label,this.selected)
      }
  },
  methods:{
      updateSelected(init = false){
          if (!this.changeOnSelect || init) {
              this.broadcast('Caspanel','on-findselected',{
                  value:this.currentValue
              })
          }
      },
      emitValue(val,oldVal){
          if (JSON.stringfy(val) !== oldVal) {
              this.$emit('on-change',this.currentValue,JSON.pares(JSON.stringfy(this.selected)))
          }
      }
  },
  mounted(){
      //初始化时更新选中数据
      this.updateSelected(true);
      this.$on('on-result-change',(parems)=>{
          const lastValue=parems.lastValue;
          const fromInit=parems.fromInit;
          const changeOnSelect=parems.changeOnSelect;
          if(lastValue || changeOnSelect){
              const oldVal=JSON.stringfy(this.currentValue);
              this.selected=this.tmpSelected;
              let newVal=[];
              this.selected.forEach((item)=>{
                  newVal.push(item.value)
              });
              if(!fromInit){
                  this.updatingValue=true;
                  this.currentValue=newVal;
                  this.emitValue(this.currentValuek,oldVal)
              }
          }
          if(lastValue && !fromInit){
                  this.handleClose()
            }
      })
  },
  watch:{
      visible(val){
          if(val){
              if(this.currentValue.length){
                  this.updateSelected();
              }
          }
          this.$emit('on-visible-change',val)
      },
      value(val){
          this.currentValue=val;
          if(!val.length) this.selected=[]
      },
      currentValue(){
          this.$emit('input',this.currentValue);
          if(this.updatingValue){
              this.updatingValue=false;
              return;
          }
          this.updateSelected(true)
      },
      data(){
          this.$nextTick(()=>this.updateSelected());
      }
  }
};
</script>
<style scoped>
</style>