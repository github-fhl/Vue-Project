import Vue from 'vue'
Vue.component('elem',{
    render:function(createElement){
        console.log("cs")
        return createElement('div')
    }
})