<template>
  <div id="example" v-clickoutside="handleClose">
      <button @click="show = !show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
          <p>下拉框内容，点击外面区域可以关闭</p>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
        show:false
    };
  },
  components: {},
  methods: {
      handleClose:function(){
          this.show=false
      }
  },
  created: function() {}
};
Vue.directive('clickoutside',{
    bind:function(el,binding,vnode){
        function documentHandle(e){
            console.log(e);
            if(el.contains(e.target)){
                return false
            }
            console.log(binding);
            if(binding.expression){
                binding.value(e)
            }
        }
        el._vueClickOutside_=documentHandle;
        document.addEventListener('click',documentHandle)
    },
    unbind:function(){
        document.removeEventListener('click',el._vueClickOutside_)
        delete el._vueClickOutside_
    }
})
</script>
<style>
.main{
    width: 125px;
}
button{
    display: block;display: block;
    width: 100%;
    color: #fff;
    background-color: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;
}
button:active{
    top: 1px;
    left: 1px;
}
.dropdown{
    width: 100%;
    height: 150px;
    margin: 5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
}
.dropdown p{
    display: inline-block;
    padding: 6px;
}
</style>
