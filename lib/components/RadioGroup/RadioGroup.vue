<script>
export default {
  props: {
    initialSelected: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.initialSelected,
    };
  },
  render() {
    return this.$scopedSlots.default({
      selected: this.selected,
      select: this.select,
    });
  },
  methods: {
    select(index) {
      this.selected = index;
    },
  },
};
</script>
