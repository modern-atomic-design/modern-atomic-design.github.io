<script>
export default {
  props: {
    initialState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: this.initialState,
    };
  },
  render() {
    return this.$slots.default({
      state: this.state,
      toggle: this.toggle,
    });
  },
  methods: {
    toggle() {
      this.state = !this.state;
    },
  },
};
</script>
