<template>
<div>
<cus-node2>origin cus-node2</cus-node2>
</div>
  
</template>

<script>
import Vue from 'vue';
    Vue.component ("cus-node1", {
			//向default插槽传递一个text参数,当没有default插槽时,展示cus-node1 default slot
			template: "<div>this is cus-node1<slot :text='text'>cus-node1 default slot</slot></div>",
			data: function () {
				return {
					text: "I'm cus-node1.text"
				}
			}
		});
		//定义组件cus-node2
		Vue.component ("cus-node2", {
			render: function (createElement) {
				//创建一个cus-node1标签
				return createElement ("cus-node1", {
					scopedSlots: {
						//创建一个default插槽插入cus-node1中
						default: function (props) {
							//此处props为cus-node1组件向default插槽传递的参数
							//插槽内容是一个span标签,如果cus-node1有对插槽传递text参数时,就展示出来;否则展示props.text is null
							return createElement ("span", props.text || "props.text is null");
						}
					}
				});
			}
		});
</script>