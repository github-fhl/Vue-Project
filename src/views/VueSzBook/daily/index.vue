<template>
  <div class="daily">
    <div class="daily-menu">
      <div
        class="daily-menu-item"
        @click="handleToRecommend"
        :class="{on: type === 'recommend'}"
      >每日推荐</div>
      <div
        class="daily-menu-item"
        :class="{on: type === 'daily'}"
        @click="showThemes = !showThemes"
      >主题日报</div>
      <ul v-show="showThemes">
        <li v-for="(item,index) in themes" :key="index">
          <a
            :class="{on:item.id === themeId && type === 'daily'}"
            @click="handleToTheme(item.id)"
          >{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="daily-list">
      <template v-if="type === 'recommend'">
        <div v-for="(list,index) in recommendList" :key="index">
            <div class="daily-date">{{list.date}}</div>
            <Item v-for="item in list.stories" :data="item" :key="item.id"></Item>
        </div>
      </template>
      <template v-if="type === 'daily'">
         <Item @click.native="handleClick(item.id)" v-for="item in list" :data="item" :key="item.id"></Item>
         
      </template>
      
    </div>
    <daily-article :id="articleId"></daily-article>
  </div>
</template>
<script>
import './style.css'
import Item from './item';
import dailyArticle from './daily-article'
export default {
  components:{Item,dailyArticle},
  data() {
    return {
      themes: [
        {
          name: "日常心理学",
          id: 13,
          thumbnail: "http://pic3.zhimg.com/xxx.jpg",
          color: 15007,
          description: "了解自己和别人，了解彼此的欲望和局限"
        }
      ],
      showThemes: false,
      themeId: 0,
      type: "recommend",
      //主题分类文章
      list: [
        {
          type: 0,
          id: 7097426,
          images:"",
          title:
            "2677777777人们在虚拟生活中投入的精力是否对现实生活的人际关系有积极意义？"
        },
        {
          type: 0,
          id: 7097427,
          images:"",
          title:
            "27777777777人们在虚拟生活中投入的精力是否对现实生活的人际关系有积极意义？"
        }
      ],
      //每日推荐文章
      recommendList: {
        date: "20170502",
        stories: [
          {
            type: 0,
            id: 7097426,
            ga_prefix:"0520220",
            images:"",
            title:
              "26人们在虚拟生活中投入的精力是否对现实生活的人际关系有积极意义？"
          },
          {
            type: 0,
            id: 7097427,
            ga_prefix:"0520221",
            images:"",
            title:
              "27人们在虚拟生活中投入的精力是否对现实生活的人际关系有积极意义？"
          }
        ]
      },
      //文章id
      articleId:"",
    };
  },
  methods: {
    handleToTheme: function(itemid) {
      //改变菜单分类
      this.type = "daily";
      //设置当前子类的主题日报id
      this.themeId = itemid;
      //清空中间栏的数据
      //this.list = [];
    },
    handleToRecommend: function() {
      //改变菜单分类
      this.type = "recommend";
      //this.recommendList=[];
    },
    handleClick:function(id){
        this.articleId=id;
    }
  }
};
</script>
<style scoped>
</style>