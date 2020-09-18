<template>
  <div id="example">
    <p>{{ $t("language.name") }}</p>
    <p>{{ $t("navbar.home") }}</p>
    <!-- <child-dom
      :foo="foo"
      :coo="coo"
      :list="list"
      v-on:upRocket="reciveRocket"
    ></child-dom> -->
    <!-- <elem :items="list">
      <h1 slot="header">标题</h1>
      <template scope="scope">
        {{scope.text}}
        <p>段落scope</p>
      </template>
      
      <p>段落</p>
      <p slot="footer">脚本</p>
      <child></child>
      <child></child>
    </elem> -->
    
    <f-input :name="name" @input="(val) => (name = val)"></f-input>
    <div>{{ name }}</div>
    <my-component :data="data"></my-component>
    <router-view></router-view>
    <el-tabs ref="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import childDom from "./ChildDom.vue";
import demoA from "./renderFun/demoA";
export default {
  data() {
    return {
      foo: "Hello, world",
      coo: "3333333333,rui",
      list: [2, 3, 4],
      name: "",
      data: {
        type:"img"
      },
      activeName:"first"
    };
  },
  watch:{
    activeName(){
      console.log(1)
      this.activeName = "first"
      this.$refs.tab.currentName="first"
      console.log(this.$refs.tab.currentName)
    }

  },
  components: { childDom, demoA },
  methods: {
    handleClick(){},
    reciveRocket() {
      console.log("reciveRocket success");
    },
    // 切换不同类型组件的数据
    change: function (type) {
      if (type === "img") {
        this.data = {
          type: "img",
          url:
            "https://raw.githubusercontent.com/iview/iview/master/assets/logo.png",
        };
      } else if (type === "video") {
        this.data = {
          type: "video",
          url: "http://vjs.zencdn.net/v/oceans.mp4",
        };
      } else if (type === "text") {
        this.data = {
          type: "text",
          content: "这是一段纯文本",
        };
      }
    },
  },
  created: function () {
    // 初始化时，默认设置图片组件的数据
    this.change("img");
  },
};

// 图片组件选项
var ImgItem = {
  props: ["data"],
  render: function (createElement) {
    return createElement("div", [
      createElement("p", "图片组件"),
      createElement("img", {
        attrs: {
          src: this.data.url,
        },
      }),
    ]);
  },
};
// 视频组件选项
var VideoItem = {
  props: ["data"],
  render: function (createElement) {
    return createElement("div", [
      createElement("p", "视频组件"),
      createElement("video", {
        attrs: {
          src: this.data.url,
          controls: "controls",
          autoplay: "autoplay",
        },
      }),
    ]);
  },
};
// 纯文本组件选项
var TextItem = {
  props: ["data"],
  render: function (createElement) {
    return createElement("div", [
      createElement("p", "纯文本组件"),
      createElement("p", this.data.text),
    ]);
  },
};
Vue.component("smart-item", {
  //函数化组件
  functional: true,
  render: function (createElement, context) {
    // 根据传入的数据，智能判断显示哪种组件
    function getComponent() {
      var data = context.props.data;
      // 判断 prop: data的type 字段是属于哪种类型的组件
      if (data.type === "img") return ImgItem;
      if (data.type === "video") return VideoItem;
      return TextItem;
    }
    return createElement(
      getComponent(),
      {
        props: {
          //把smart-item的prop: data传给上面智能选择的组件
          data: context.props.data,
        },
      },
      context.children
    );
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
