import "@/utils/typeJudge";
import "@/utils/jsAddFun";
import Vue from 'vue'
import App from './app.vue'
import router from '@/router'
import '@/element'
import anchor from '@/components/anchor'
import portalitemHeader from '@/components/portal/item-header'
import list from '@/components/list'
import preformwithstatus from '@/components/pre-form-with-status'
import preform from '@/components/pre-form'
import select from '@/components/select/index'
import VueI18n from 'vue-i18n';

Vue.prototype.$JSONLayoutConfig = 'MyApptttttttttt'
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'zh', //使用localStorage缓存到本地，当下次使用时可默认当前使用语言
    messages: {
        'zh': require('./src/common/lang/zh'),
        'en': require('./src/common/lang/en')
    }
})

Vue.use(anchor);
Vue.use(portalitemHeader);
Vue.use(list);
Vue.use(preformwithstatus);
Vue.use(preform);

Vue.component('y-select', select)
//Vue.use(select);
var DIDIComponent = Vue.extend({
    template: "<div>A custom component!</div>"
  });
  // 注册
  Vue.component("didi-component", DIDIComponent);
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Hello }, // No props, no nothing
//     { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
//     { path: '/static', component: Hello, props: { name: 'world' }}, // static values
//     { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
//     { path: '/attrs', component: Hello, props: { name: 'attrs' }}
//   ]
// })
// var login={
//     template:'<div id="appone"><router-view></router-view></div>'
// }
// new Vue({  //VM
//     el:'#app',
//     data:{
//         msg:'欢迎学习vue!'  //M
//     },
//     router: router,
//     methods:{},
//     render:function(createElements){//createElements是一个方法，调用它，能够把指定的组件模板，渲染为html结构
//         return createElements('h1', this.msg)
//         // 注意：这里return的结果，会替换页面中el指定的那个容器
//     }
// })
new Vue({
    el: '#app',
    i18n,
    router: router,
    render: h => {
        return h(App)
    }
});