<template>
  <div id="example">
      <div v-time="timeNow">
      </div>
      <div v-time="timeBefore">
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import {Time} from './timeFun'
export default {
  data() {
    return {
        timeNow:(new Date()).getTime(),
        timeBefore: 1488930695721
    };
  },
  components: {},
  methods: {
  },
  created: function() {}
};
Vue.directive('time',{
    bind:function(el,binding){
      el.innerHTML=Time.getFormatTime(binding.value);
      el._timeout=setInterval(function(){
        el.innerHTML=Time.getFormatTime(binding.value);
      },6000)
    },
    unbind:function(){
      clearInterval(el._timeout);
      delete el._timeout
    }
})
</script>
<style>

</style>
