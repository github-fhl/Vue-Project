import Vue from "vue";
export default Vue.component("vInput", {
    props: {
      value: {
        type: [String,Number],
        default: "",
      },
    },
    data() {
      return {
      };
    },
    created(){
    },
    mounted() {
    },
    methods: {
  
    },
    render: function(h){
        var self=this;
        return h('div',[
            h('span',"昵称"),
            h('input',{
                attrs:{
                    type:'text'
                },
                domProps:{
                    value:this.value
                },
                on:{
                    input:function(event){
                        self.$emit('input',event.target.value)
                    }
                }
            })])
    }
  });