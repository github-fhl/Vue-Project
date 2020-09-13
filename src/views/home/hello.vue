<template>
  <div id="example">
    <p>{{ $t('language.name') }}</p>
    <p>{{ $t('navbar.home') }}</p>
    <!-- <child-dom :foo="foo" :coo="coo" v-on:upRocket="reciveRocket"></child-dom> -->
    <elem></elem>
  </div>
</template>>

<script>
import childDom from "./ChildDom.vue";
import demoA from "./jsRenderFun/demoA"
export default {
  data() {
    return {
      foo: "Hello, world",
      coo: "Hello,rui"
    };
  },
  components: { childDom,demoA },
  methods: {
    reciveRocket() {
      console.log("reciveRocket success");
    }
  }
};
</script>