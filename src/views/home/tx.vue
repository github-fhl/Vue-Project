<template>
  <div id="example">
    <el-container>
      <el-card style="margin:20px 20px 0 20px">
        <el-row slot="header" type="flex" style="align-items:center">
          <div style="flex:auto">调整薪酬项</div>
          <i class="el-icon-plus"></i>
        </el-row>
        <y-list :forList="detail">
          <template slot-scope="scope">
            <el-row
              type="flex"
              style="height: 30px;justify-content: flex-end;align-items: flex-end"
            >
              <i class="el-icon-delete"></i>
            </el-row>
            <y-pre-form-with-status :initialEditStatus="iffalse" formConfig="scope.item">
              <el-form-item label="薪酬项" prop="payComponent">
                <el-input v-model="xcx"></el-input>
              </el-form-item>
            </y-pre-form-with-status>
          </template>
        </y-list>
      </el-card>
    </el-container>
  </div>
</template>>

<script>
export default {
  data() {
    return {
      forList: ["123"],
      xcx: "123",
      iffalse:false,
      detail: [
        {
          effectiveEndDate: "99991231",
          reason: "",
          payComponent: ["309580467794419713"],
          isLastest: "1",
          lastModifiedDate: "2020-04-02 10:17:54",
          lastModifiedBy: null,
          payRate: 100,
          effectiveEntryTime: "0",
          externalId: "U00001-A",
          createDatetime: "2019-11-21 09:32:21",
          createBy: "0",
          instanceId: "647006373935357953",
          tenantId: "test",
          effectiveStartDate: "19000101",
          guid: "647006374887464961",
          currency: ["309578671835389953"],
          id: "647006374887464961",
          objectId: "7000040"
        }
      ]
    };
  }
};
</script>