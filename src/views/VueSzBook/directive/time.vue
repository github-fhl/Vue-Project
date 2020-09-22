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
export default {
  data() {
    return {
        timeNow:(new Date()).getTime(),
        timeBefore: 1488930695721
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
Vue.directive('time',{
    bind:function(el,binding,vnode){
    },
    unbind:function(){
    }
})
</script>
<style>

</style>
