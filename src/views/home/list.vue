<template>
    <div>
        list详情
    </div>
</template>
<script>
    export default {
         props: {
			"layoutCode": {default: ""},
			"configParams": {default: false},
		},
        data() {
        return {
            id:'123456'
            }
        },
        created(){
            console.log(this.$route.params)
            console.log(this.layoutCode)
            console.log(this.configParams.payload)
        }
    }
</script>