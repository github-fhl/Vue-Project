<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

    <el-row>
      <div :span="4" style="min-width: 200px; float: right;">
        <el-input
          style="width: 180px;"
          v-model="searchData"
          placeholder="输入关键字搜索"
          clearable
          @keyup.enter.native="getDeptListData"
          size="small"
        />
        <el-button size="small" type="success" @click="getDeptListData">搜索</el-button>
      </div>
    </el-row>
    <el-table
      ref="singleTable"
      :data="tableData "
      highlight-current-row
      border
      :default-sort="ds"
      height="550"
      :filter-method="filterHandler"
      @selection-change="handleSelectionChange"
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="名称" sortable>
        <template slot-scope="scope">
          <span v-html="showDate(scope.row.name)"></span>
        </template>
        <!-- 这一步为关键，将数据用v-html显示方便添加html标签和设置样式-->
      </el-table-column>

      <el-table-column prop="age" label="年龄" sortable>
        <template slot-scope="scope">
          <span v-html="showDate(scope.row.age)"></span>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>
<script>
export default {
  name: "element",
  data(){
    return{
      searchData:"",
      tableData:[]
    }
  },
  methods: {
    getDeptListData() {
      getDeptList().then(response => {
        if (_self.searchData != "") {
          _self.tableData = response.data.filter(
            item =>
              item.name.toString().includes(_self.searchData.toString()) ||
              item.age.toString().includes(_self.searchData.toString())
          );
        } else {
          _self.tableData = response.data;
        }
      });
    },
    // 筛选变色
    showDate(val) {
      val = val + "";
      if (val.indexOf(_self.searchData) !== -1 && _self.searchData !== "") {
        return val.replace(
          _self.searchData,
          '<font color="#409EFF">' + _self.searchData + "</font>"
        );
      } else {
        return val;
      }
    }
  }
};
</script>
<style scoped></style>
