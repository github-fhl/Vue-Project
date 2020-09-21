import Vue from "vue";
export default Vue.component("vList", {
    props: {
        list: {
            type: Array,
            default: ()=>{
                return []
            }
        },
    },
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        hanleReply:function(index){
            this.$emit('reply',index)
        }
    },
    render: function (h) {
        var self = this;
        var list = [];
        this.list.forEach((msg,index) => {
            var node=h('div',{
                attrs:{
                    class:'list-item'
                }
            },
            [
                h('span',msg.name+":"),
                h('div',{
                    attrs:{
                        class:'list-msg'
                    }
                },
                [
                    h('p',msg.message),
                    h('button',{
                        attrs:{
                            class:'list-reply'
                        },
                        on:{
                            click:function(){
                                self.hanleReply(index);
                            }
                        }
                    },"回复"
                    )
                ]
                )
            ]
            )
            list.push(node);
        });
        if(this.list.length){
            return h("div",{
                attrs:{
                    class:"list"
                }
            },list
            )
        }else{
            return h("div",{
                attrs:{
                    class:"list-nothing"
                }
            },
            "留言列表为空"
            )
        }
    }
});