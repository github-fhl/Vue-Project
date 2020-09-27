<template>
  <div id="example">
      <div v-test="{msg:'hello',name:'Laura'}">
      </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
        message:"some text"
    };
  },
  components: {},
  methods: {
  },
  created: function() {}
};
Vue.directive('test',{
    bind:function(el,binding,vnode){
        let keys=[];
        for(let i in vnode){
            keys.push(i)
        }
        console.log(binding)
        console.log(vnode)
        el.innerHTML=
        "name:"+binding.name+'<br>'+
        "value:"+binding.value+'<br>'+
        "expression:"+binding.expression+'<br>'+
        "argument:"+binding.arg+'<br>'+
        "modifiers:"+JSON.stringify(binding.modifiers)+'<br>'+
        "vnode keys:"+keys.join(',')
    },
    unbind:function(){
    }
})
</script>
<style>

</style>
