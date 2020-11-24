import Vue from 'vue'

var mycloneNode = {
    render: function (createElement) {
        return createElement('div', "clone")
    }
}
Vue.component("child", {
    render: function (createElement) {
        return createElement('div', "clone")
    }
})
Vue.component("elem", {
    props: ['items'],
    data: function () {
        return {
            show: false,
            text: "233"
        }
    },
    methods: {
        handleClick: function () {
            console.log("点击");
            this.text = 'clicked' + new Date();
        }
    },
    render: function (createElement) {
        //var self=this;
        // if(this.items.length>0){
        //     return  createElement("ul",this.items.map((item)=>{
        //         return createElement("li",item)
        //     }))
        // }else{
        //     return createElement("p","暂无列表")
        // }
        return createElement("div", {
            'class': {
                foo: this.show
            },
            style: {
                color: "blue"
            },
            attrs: {
                id: "eleid"
            },
            on: {
                click: this.handleClick
            },
            nativeOn: {
                click: () => {
                    self.text = 'clicked' + new Date();
                }
            }
            // domProps:{
            //     innerHTML:"测试"
            // }
        }, [this.$slots.default, this.$slots.default])
    }
})

Vue.component("f-input", {
    props: {
        name: String
    },
    render: function (createElement) {
        var self = this;
        return createElement("input", {
            'class': {
                foo: this.show
            },
            style: {
                color: "blue"
            },
            attrs: {
                id: "eleid"
            },
            domProps: {
                value: self.name
            },
            on: {
                input: function (event) {
                    self.$emit('input', event.target.value)
                }
            },
            // domProps:{
            //     innerHTML:"测试"
            // }
        })
    }
})

var imgItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement("div", [createElement('p', "图片组件")])
    }

}
var textItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement("div", [createElement('p', "文本组件")])
    }

}
var videoItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement("div", [createElement('p', "视频组件")])
    }

}

Vue.component('my-component', {
    name: "my-component",
    //functional: true,
    // Props 是可选的
    props: {
        data: {
            type: Object
        }
    },
    // 为了弥补缺少的实例
    // 提供第二个参数作为上下文
    render: function (h) {
        function getComponent() {
            if (context.props.data.type == "img") {
                return imgItem
            } else if (context.props.data.type == "video") {
                return videoItem
            } else {
                return textItem
            }
        }
        return h("el-container", {
            props: { "direction": "vertical" }
        }, [h("el-container", {
            style: {
                "height": "calc(100vh - 100px)"
            }
        }, [
            h("el-scrollbar",{
                style:{
                    "height":"100%",
                    "width":"100%",
                }
            },[
                h("el-row",{},[h("el-container",{
                    class:"header-part page-header",
                    style:{
                        "align-items":"center"
                    }
                },[
                    h("h2",{
                        domProps:{innerHTML:"组织"}
                    })
                ])]),
                h("el-card",{
                    style:{
                        "margin":"20px 18px",
                        "flex":"auto",
                        "display":"flex"
                    },
                    props:{
                        "body-style":{
                            "flex":"auto",
                            "padding":"0"
                        }
                    }
                },[
                    h("el-main",{
                        style:{
                            "padding":"20px"
                        }
                    },[
                        h("el-input",{
                            style:{
                                "border-radius":"4px 0px 0px 4px"
                            },
                            props:{
                                "placeholder":"请输入名称",
                                "value":"{searchParams.current.codeName}"
                            }
                        },[])
                    ])
                ])
            ])
        ])]);
    }
})