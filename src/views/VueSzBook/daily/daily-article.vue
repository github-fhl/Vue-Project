<template>
  <div class="daily-article">
    <div class="daily-article-title">{{id}}  {{data.title}}</div>
    <div class="daily-article-content" v-html="data.body"></div>
  </div>
</template>
<script>
export default {
  name: "dailyArticle",
  props: {
    id: {
      type: [String,Number],
      default: ""
    }
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getArticle() {
      this.data = {
        title: "这茶，明显是用了梅雨期的雨水，我还是喜欢用腊月的雪水",
        body: "文章内容，格式为html"
      };
      window.scrollTo(0, 0);
    }
  },
  watch: {
    id(val) {
      if (val) this.getArticle();
    }
  }
};
</script>
<style scoped>
.daily-article{
    margin-left: 450px;
    padding: 20px;
}
.daily-article-title{
    font-size: 28px;
    font-weight: bold;
    color: #222;
    padding: 10px 0;
}
/* .view-more a{
    display: block;
    cursor: pointer;
    background: #f5f7f9;
    text-align: center;
    color: inherit;
    text-decoration: none;
    padding: 4px 0;
    border-radius: 3px;
} */
</style>