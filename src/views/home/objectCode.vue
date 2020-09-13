<template>
    <div>
        objectCode=============={{$route.params.objectCode}}
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            id:'123456'
            }
        },
        created(){
            console.log(this.$route.params)
        }
    }
</script>