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
    functional: true,
    // Props 是可选的
    props: {
        data: {
            type: Object
        },
        placeholder:{
            type:String
        }
    },
    // 为了弥补缺少的实例
    // 提供第二个参数作为上下文
    render: function (h, context) {
        function getComponent() {
            if (context.props.data.type == "img") {
                return imgItem
            } else if (context.props.data.type == "video") {
                return videoItem
            } else {
                return textItem
            }
        }
        console.log(context)
        context.data.attrs["placeholder"]=context.props['placeholder'];
        return h("el-input", context.data, context.children);
    }
})