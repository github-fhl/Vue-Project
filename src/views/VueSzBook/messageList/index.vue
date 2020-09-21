<template>
  <div id="example">
    <vInput v-model="username"></vInput>
    <vTextarea v-model="message"></vTextarea>
    <v-list :list="list" @reply="handleReply"></v-list>
  </div>
</template>

<script>
import Vue from "vue";
import vInput from "./input"
import vTextarea from "./textArea"
import vList from "./list"
export default {
  data() {
    return {
        username:"",
        message:"",
        list:[{
            name:"星星",
            message:"测试",
        }]
    };
  },
  components: {vInput,vTextarea,vList},
  methods: {
      handleSend:function(){
          this.list.push({
              name:this.username,
              message:this.message
          })
          this.message=""
      },
      handleReply:function(index){
          var name= this.list[index].name;
          this.message="回复@"+name+":"
      }
  },
  created: function () {},
};

</script>
<style>
.on{
  color: aqua;
}
</style>
