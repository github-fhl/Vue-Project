import Vue from "vue";
export default Vue.component("vTextarea", {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    focus:function(){
      this.$refs.messagea.focus()
    }
  },
  render: function (h) {
    var self = this;
    return h('div', [
      h('span', "留言内容"),
      h('textarea', {
        attrs: {
          rows: '6',
          cols:'30'
        },
        ref:'messagea',
        domProps: {
          value: this.value
        },
        on: {
          input: function (event) {
            self.$emit('input', event.target.value)
          }
        }
      })])
  },
});