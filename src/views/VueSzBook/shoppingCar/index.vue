<template>
  <div id="example">
      <template v-if="list.length">
          <table>
              <thead>
                  <tr>
                      <th>序号</th>
                      <th>名称</th>
                      <th>单价</th>
                      <th>数量</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(el,index) in list" :key="index">
                      <td>{{index}}</td>
                      <td>{{el.name}}</td>
                      <td>{{el.price}}</td>
                      <td>
                          <button :disabled="el.count === 1" @click="handleReduce(index)">-</button>
                          {{el.count}}
                          <button @click="handleAdd(index)">+</button>
                      </td>
                      <td @click="handleRemove(index)">移除</td>
                  </tr>
              </tbody>
          </table>
          <div>总价： ￥{{totalPrice}}</div>
      </template>
      <div v-else>购物车为空</div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
        list:[{
            id:1,
            name:"铅笔",
            price:200,
            count:2
        },
        {
            id:2,
            name:"苹果",
            price:10,
            count:1
        },
        {
            id:3,
            name:"钢笔",
            price:200,
            count:3
        }]
    };
  },
  components: {},
  methods: {
      handleReduce:function(index){
          if(this.list[index].count === 1) return
          this.list[index].count--

      },
      handleAdd:function(index){
          this.list[index].count++
      },
      handleRemove:function(index){
          this.list.splice(index,1)
      }
  },
  created: function () {},
  computed:{
      totalPrice:function(){
          var total=0;
          for(let i=0;i<this.list.length;i++){
              var item = this.list[i];
              total+=item.price*item.count;
          }
          return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
      }
  }
};

</script>
<style>
table{
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
}
th, td{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}
th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600; font-weight: 600;
    white-space: nowrap;
}
</style>
