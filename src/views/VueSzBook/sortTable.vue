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
          key: "name",
        },
        {
          title: "年龄",
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
          name: "王小明",
          age: 18,
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
  mounted() {
    this.makeColumns();
    this.makeData();
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
  },
  render: (h) => {
    var ths = [];
    var trs = [];
    var self = this;
    this.currentData.forEach((item, index) => {
      var tds = [];
      self.currentColumns.forEach((item, index) => {
          tds.push(h("td",item[item.key]))
      });
      trs.push(h("tr",tds));
    });
    return h("table", [h("thead", [h("tr", ths)]), h("tbody", trs)]);
  },
});
</script>
