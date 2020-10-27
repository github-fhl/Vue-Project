<template>
  <el-main>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="search">搜搜</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope">
          <span v-html="showData(scope.row.name)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: []
    };
  },
  computed: {
  },
  methods: {
    // 筛选变色
    showData(val) {
      console.log(val)
      val = val + "";
      if (this.checkPara(val, this.input)) {
        //如果搜索结果记录包含关键字中的任何一个，那么修改样式
        return val.replace(this.input,'<font color="#409EFF">' + this.input + '</font>')
      } else {
        return val; //不做任何修改
      }
    },
    //判断搜索记录是否包含某个关键字
    checkPara(val, para) {
      if (val.indexOf(para) !== -1 && para !== "") {
        return true;
      } else {
        return false;
      }
    },
    search() {
      this.tableData=[
        {
          date: "2016-05-02",
          name: "王小哈",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小明",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  }
};
</script>