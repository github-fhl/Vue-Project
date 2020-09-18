<template>
  <div id="example">
    <v-table :data="data" :columns="columns"></v-table>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          sortable:true,
          key: "name",
        },
        {
          title: "年龄",
          sortable:true,
          key: "age",
        },
      ],
      data: [
        {
          name: "王小明",
          age: 18,
          birthday: "19000802",
          address: "山西省吕梁市离石区118号118弄",
        },
        {
          name: "王小丽",
          age: 10,
          birthday: "19000802",
          address: "山西省吕梁市离石区118号118弄",
        },
        {
          name: "王小哈",
          age: 5,
          birthday: "19000802",
          address: "山西省吕梁市离石区118号118弄",
        },
      ],
    };
  },
  components: {},
  methods: {},
  created: function () {},
};
Vue.component("vTable", {
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      currentColumns: [],
      currentData: [],
    };
  },
  created(){
    this.makeColumns();
    this.makeData();
  },
  mounted() {
    //this.makeColumns();
    //this.makeData();
  },
  methods: {
    makeColumns: function () {
      this.currentColumns = this.columns.map((item, index) => {
        //添加字段标识当前列排序的状态
        item._sortType = "normal";
        //添加字段标识当前列在数组中的索引
        item._index = index;
        return item;
      });
    },
    makeData: function () {
      this.currentData = this.data.map((item, index) => {
        //添加字段标识当前行在数组中的索引
        item._index = index;
        return item;
      });
    },
    //升序
    handleSortByAsc:function(index){
      var key= this.currentColumns[index].key;
      this.currentColumns.forEach(function(item,index){
        item._sortType="normal";
      })
      this.currentColumns[index]._sortType="asc";
      this.currentData.sort(function(a,b){
        return a[key] < b[key] ? -1:1
      })
    },
    //降序
    handleSortByDesc:function(index){
      var key= this.currentColumns[index].key;
      this.currentColumns.forEach(function(item,index){
        item._sortType="normal";
      })
      this.currentColumns[index]._sortType="desc";
      this.currentData.sort(function(a,b){
        return a[key] < b[key] ? 1:-1
      })
      console.log(this.currentData);
    }

  },
  render: function(h){
    var ths = [];
    var trs = [];
    var self = this;
    this.currentColumns.forEach((item, index) => {
      if(item.sortable){
        ths.push(h("th",[h('th',[h('span',item.title),h('a',{
          class:{
            on:item._sortType === 'asc'
          },
          on:{
            click:function(){
              self.handleSortByAsc(index)
            }
          }
        },'↑'),
        //降序
        h('a',{
          class:{
            on:item._sortType === 'desc'
          },
          on:{
            click:function(){
              self.handleSortByDesc(index)
            }
          }
        },'↓')
        ])]));
      }else{
        ths.push(h("th",item.title))
      }
    });
    this.currentData.forEach((row, index) => {
      var tds = [];
      self.currentColumns.forEach((item, index) => {
          tds.push(h("td",row[item.key]))
      });
      trs.push(h("tr",tds));
    });
    return h("table", [h("thead", [h("tr", ths)]), h("tbody", trs)]);
  },
});
</script>
<style>
.on{
  color: aqua;
}
</style>
