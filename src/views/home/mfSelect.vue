<template>
  <div>
    <y-pre-form
      v-if="
        this.baseinfoData.some((item) => item.bizModeltName == '基本信息') &&
        this.baseinfoData.filter((item) => item.bizModeltName == '基本信息')[0]
          .disPlays
      "
      style="padding: 40px 20px 30px 20px"
      :model="formData"
      labelPosition="top"
      :span="2"
      :inline="true"
    >
      <el-form-item
        label="上级"
        v-if="
          this.baseinfoData
            .filter((item) => item.bizModeltName == '基本信息')[0]
            .fileds.some((item) => item.filedCode == 'name') &&
          this.baseinfoData
            .filter((item) => item.bizModeltName == '基本信息')[0]
            .fileds.filter((item) => (item.filedCode = 'name'))[0].disPlays
        "
      >
        <y-select
          :filter="filter"
          optionsPath="LOCALE"
          v-model="formData.locale"
          @change="(v) => (formData.locale = v)"
        >
        </y-select>
      </el-form-item>
      <el-form-item label="编码" prop="code">
        <el-input defaultValue="" v-model="formData.code"> </el-input>
      </el-form-item>
    </y-pre-form>
    <el-button @click="drawerFun" type="primary" style="width: 80px">
      点我打开
    </el-button>
    <el-button @click="drawerFunb" type="primary" style="width: 80px">
      点我打开
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" size="50%" direction="rtl">
      <y-select
          :filter="filter"
          optionsPath="LOCALE"
          v-model="formData.locale"
          @change="(v) => (formData.locale = v)"
        >
      </y-select>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-drawer>
  </div>
</template>
<script>
//v-if="(baseinfoData.indexOf((item)=> item.bizModeltName === '基本信息')>=0) && baseinfoData[(baseinfoData.indexOf((item)=> item.bizModeltName === '基本信息')>=0)].disPlays"
export default {
  data() {
    return {
      formData: {
        locale: "328579229661044737",
      },
      filter: { params: { asOfDate: "20200817" } },
      baseinfoData: [],
      drawer: false,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, 
        //{
        //   value: '选项2',
        //   label: '双皮奶'
        // }, {
        //   value: '选项3',
        //   label: '蚵仔煎'
        // }, {
        //   value: '选项4',
        //   label: '龙须面'
        // }, {
        //   value: '选项5',
        //   label: '北京烤鸭'
        // }
        ],
        value: '选项2'
    };
  },
  methods: {
    drawerFun(){
      this.value="选项1";
      this.formData.locale="328579229082230785";
      this.drawer=true;

    },
    drawerFunb(){
      this.$forceUpdate();
      this.formData.locale="328579232144072705";
      this.value="选项3";
      this.drawer=true;
    }
    // formDataLocal(v) {
    //   this.formData.locale =v
    //   console.log(v)
    //   console.log(this.formData)
    // }
  },
  mounted() {
    this.baseinfoData = [
      {
        bizModeltName: "基本信息",
        bizModeltCode: "baiscInfo",
        disPlays: true,
        fileds: [
          {
            objectCode: "NAME(CHN)",
            filedCode: "name",
            disPlays: true,
          },
          // {
          //   objectCode: "NAME(CHN)",
          //   filedCode: "name",
          //   disPlays: false,
          // },
        ],
      },
      {
        bizModeltName: "人员信息",
        bizModeltCode: "baiscInfo",
        disPlays: false,
        fileds: [
          {
            objectCode: "NAME(CHN)",
            filedCode: "name",
            disPlays: false,
          },
          {
            objectCode: "NAME(CHN)",
            filedCode: "name",
            disPlays: false,
          },
        ],
      },
    ];
    console.log(
      this.baseinfoData.some((item) => item.bizModeltName == "基本信息") &&
        this.baseinfoData.filter((item) => item.bizModeltName == "基本信息")[0]
          .disPlays
    );
    let fillistTem = this.baseinfoData.filter(
      (item) => item.bizModeltName == "基本信息"
    )[0];
    console.log(fillistTem);
    let fillist = fillistTem.fileds.some((item) => item.filedCode == "name");
    console.log(fillist);
    console.log(
      this.baseinfoData
        .filter((item) => item.bizModeltName == "基本信息")[0]
        .fileds.some((item) => item.filedCode == "name")
    );
  },
  beforeCreate() {
    let obj = [
      {
        objectName: "基本信息",
        ifDisplay: {
          birthdate: false,
        },
      },
    ];
    console.log(JSON.stringify(obj));
  },
};
</script>
<style scoped></style>
