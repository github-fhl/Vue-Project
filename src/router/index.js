import VueRouter from "vue-router";
import Home from '@/views/index'
import ObjectCode from '@/views/home/objectCode'
import List from '@/views/home/list'
import Hello from '@/views/home/hello'
import hszj from '@/views/home/hszj'
import tx from '@/views/home/tx'
import mfSelect from '@/views/home/mfSelect'
import sortTable from '@/views/VueSzBook/sortTable'
//mfSelect
import Vue from "vue";

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// "dynamic-import-webpack"/"dynamic-import-node" 可以解决动态导入的问题
let router;
router = new VueRouter({
	mode: "history",
	base: "/Laura/",
	routes: [{
		path: '/static',
		component: Hello,
		props() {
			return {name:"123"}
		}
	},
	{
		path: '/sortTable',
		component: sortTable
	},
	{
		path: '/mfSelect',
		component: mfSelect
	},
	{
		path: '/tx',
		component: tx
	},
	{
		path: '/hszj',
		component: hszj,
		props() {
			return {name:"123"}
		}
	}, {
		path: `/home`,
		component: Home,
		name: `Home`,
		children: [{
			path: `:objectCode`,
			name: `CorehrMetaObject`,
			tag: `CorehrMetaObject`,
			hidden: false,
			component: ObjectCode,
			children: [{
				path: `list`,
				name: `CorehrMetaObjectIndex`,
				tag: `CorehrMetaObjectIndex`,
				meta: {},
				component: List,
				props({
					params: {
						objectCode
					}
				}) {
					return {
						layoutCode: `meta__${objectCode.toLowerCase()}__home`,
						configParams: {
							payload: {
								pageName: "CorehrMetaObjectIndex"
							}
						}

					};
				}
			}]
		}]
	}]
});
Vue.use(VueRouter);
export default router;