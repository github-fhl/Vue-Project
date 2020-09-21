<template>
  <div id="example">
    <div class="message">
      <vInput v-model="username"></vInput>
      <vTextarea v-model="message" ref="message"></vTextarea>
      <button @click="handleSend">发布</button>
    </div>
    <v-list class="list" :list="list" @reply="handleReply"></v-list>
  </div>
</template>

<script>
import Vue from "vue";
import vInput from "./input";
import vTextarea from "./textArea";
import vList from "./list";
export default {
  data() {
    return {
      username: "",
      message: "",
      list: [
        {
          name: "星星",
          message: "测试"
        }
      ]
    };
  },
  components: { vInput, vTextarea, vList },
  methods: {
    handleSend: function() {
      if (this.username === "") {
        alert("请输入昵称");
        return;
      }
      if (this.message === "") {
        alert("请输入留言内容");
        return;
      }
      this.list.push({
        name: this.username,
        message: this.message
      });
      this.message = "";
    },
    handleReply: function(index) {
      var name = this.list[index].name;
      this.message = "回复@" + name + ":";
      this.$refs.message.focus();
    }
  },
  created: function() {}
};
</script>
<style>
#example{
  width: 500px;
  margin: 50px auto;
}
.list button{
  margin-left:350px;
}
* {
  padding: 0;
  margin: 0;
}
.message {
  width: 450px;
  text-align: right;
}
.message div {
  margin-bottom: 12px;
}
.message span {
  display: inline-block;
  width: 100px;
  vertical-align: top;
}
.message input,
.message textarea {
  width: 300px;
  height: 32px;
  padding: 0 6px;
  color: #657180;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  cursor: text;
  outline: none;
}
.message input:focus,
.message textarea:focus {
  border: 1px solid #3399ff;
}
.message textarea {
  height: 60px;
  padding: 4px 6px;
}
#example button{
  display: inline-block;
  padding: 6px 15px;
  border: 1px solid #39f;
  border-radius: 4px;
  color: #fff;
  background-color: #39f;
  cursor: pointer;
  outline: none;
}
.message button {
  display: inline-block;
  padding: 6px 15px;
  border: 1px solid #39f;
  border-radius: 4px;
  color: #fff;
  background-color: #39f;
  cursor: pointer;
  outline: none;
}
.list {
  margin-top: 50px;
}
list-item {
  padding: 10px;
  border-bottom: 1px solid #e3e8ee;
  overflow: hidden;
}
.list-item span {
  display: block;
  width: 60px;
  float: left;
  color: #39f;
}
.list-msg {
  display: block;
  margin-left: 60px;
  text-align: justify;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
.list-msg a {
  color: #9ea7b4;
  cursor: pointer;
  float: right;
}
.list-msg a:hover {
  color: #39f;
}
.list-nothing {
  text-align: center;
  color: #9ea7b4;
  padding: 20px;
}
</style>
