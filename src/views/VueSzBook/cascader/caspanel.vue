<template>
  <span>
      <ul v-if="data && data.length" :class="[prefixCls+'-menu']">
          <casitem v-for="(item,index) in data"
          :key="index"
          :prefix-cls="prefixCls"
          :data="item"
          :tmp-item="tmpItem"
          @click.native.stop="handleClickItem(item)"
          @mouseenter.native.stop="handleHoverItem(item)">
          </casitem>

      </ul>
      <caspanel v-if="sublist && sublist.length"
      :prefix-cls="prefixCls"
      :data="sublist"
      :disabled="disabled"
      :trigger="trigger"
      :change-on-select="changeOnSelect"
      >
      </caspanel>
  </span>
</template>
<script>
import casitem from './casitem'
import emitter from './emitter'
export default {
  name: "caspanel",
  mixins:[emitter],
  components:{casitem},
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    changeOnSelct:Boolean,
    trigger: String,
    prefixCls:String
  },
  data(){
      return{
          tmpItem:{},
          result:[],
          sublist:[]
      }
  },
  watch:{
      data(){
          this.sublist=[];
      }
  },
  methods:{
    //点击选中
    handleClickItem(item){
      if(this.trigger !== 'click' && item.children) return;
      this.handleTiggerItem(item)
    },
    //鼠标滑过选中
    handleHoverItem(item){
      if(this.trigger != 'hover' || !item.children) return;
      this.handleTiggerItem(item)
    },
    handleTiggerItem(item,fromInit = false){
      if(this.disabled) return;
      //向上递归，设置零食选中值
      const backItem=this.getBaseitem(item);
      this.tmpItem=backItem;
      this.emitUpdate([backItem])
      //通知Cascader更新选中值
      if (item.children && item.children.length) {
        this.sublist=item.children;
        this.dispatch('Cascader','on-result-change',{
          lastValue:false,
          changeOnSelect:this.changeOnSelect,
          fromInit:fromInit
        })
      }else{
        this.sublist=[]
        this.dispatch('Cascader','on-result-change',{
          lastValue:true,
          changeOnSelect:this.changeOnSelect,
          fromInit:fromInit
        })
      }
    },
    updateResult(item){
      this.result=[this.tmpItem].concat(item);
      this.emitUpdate(this.result);
    },
    getBaseitem(item){
      let backItem=Object.assign({},item);
      if (backItem.children) {
        delete backItem.children
      }
      return backItem
    },
    emitUpdate(result){
      if (this.$parent.$options.name === 'caspanel') {
        this.$parent.updateResult(result)
      }else{
        this.$parent.$parent.updateResult(result)
      }
    }
  },
  mounted(){
    //接收来自Cascader和Caspanel的更新选中值事件
    this.$on('on-find-selected',(params)=>{
      const val=params.value;
      let value=[...val];
      for(let i=0;i<val.length;i++){
        for(let j=0;j<this.data.length;j++){
          if (value[i] === this.data[j].value) {
            this.handleTiggerItem(this.data[j],true);
            value.splice(0,1);
            this.$nextTrick(()=>{
              //继续向下递归更新选中状态
              this.broadcast('caspanel','on-find-selected',{
                value:value
              })
            })
            return false
          }
        }
      }
    })
  }
};
</script>
<style scoped>
</style>