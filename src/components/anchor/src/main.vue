<template>
  <el-container class="y-anchor">
    <el-card class="y-anchor-card">
      <el-container class="y-anchor-content" direction="vertical">
        <el-container direction="vertical">
          <!-- v-anchor="item.anchorName" -->
          <a v-for="(item,index) in anchors" v-bind:key="index">
            <div class="circle"></div>
            <span>{{item.title}}</span>
          </a>
        </el-container>
      </el-container>
    </el-card>
    <el-container style="margin-left: 200px">
      <slot></slot>
    </el-container>
  </el-container>
</template>
<script type="text/babel">
export default {
  name: "YAnchor",
  props: {
    anchors: {
      type: Array,
      default() {
        return [
          {
            anchorName: "name",
            title: "姓名"
          },
          {
            anchorName: "personal-info",
            title: "档案资料"
          },
          {
            anchorName: "local",
            title: "本地信息(中国)"
          },
          {
            anchorName: "id",
            title: "个人身份标识号"
          },
          {
            anchorName: "location",
            title: "地址"
          },
          {
            anchorName: "mobile",
            title: "电话"
          },
          {
            anchorName: "mail",
            title: "邮箱"
          },
          {
            anchorName: "bank",
            title: "银行账号"
          }
        ];
      }
    }
  },
  methods: {}
};
</script>
<style
		lang="scss"
		scoped
		type="text/scss">
@mixin bg($url) {
  background-image: url($url);
  background-repeat: no-repeat;
}

.y-anchor {
  .y-anchor-card {
    height: fit-content;
    position: fixed;
    width: 200px;

    .y-anchor-content {
      padding: 20px 0;
      @include bg("~@/assets/icon/svg/anchor.svg");
      background-size: contain;
      background-position: 3px;
    }

    .circle-hollow {
      width: 20px;
      height: 10px;
      display: block;
      @include bg("~@/assets/icon/svg/circle-hollow.svg");
      background-size: 20px 20px;
      background-position: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 6px;
        @include bg("~@/assets/icon/svg/circle.svg");
        background-position: center;
        background-size: 6px 6px;
        border-top-width: 3px;
        border-bottom-width: 3px;
        border-left-width: 0;
        border-right-width: 0;
        border-color: white;
        border-style: solid;
      }

      span {
        font-size: 12px;
        line-height: 24px;
        color: #666666;
        cursor: pointer;
      }
    }
  }
}
</style>


