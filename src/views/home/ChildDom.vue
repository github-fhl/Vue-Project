<template>
  <div>
    <p>foo:{{foo}}</p>
    <p>attrs:{{$attrs}}</p>
    <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
  </div>
</template>
<script>
import childDomChild from "./childDomChild.vue";
export default {
  name: "child-dom",
  props: ["foo"],
  inheritAttrs: false,
  components: { childDomChild }
};
</script>