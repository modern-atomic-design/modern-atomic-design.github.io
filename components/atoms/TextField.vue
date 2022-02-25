<template>
  <input
    class="px-4 py-3 text-lg border-white placeholder-gray-400 ring-0 border-2 focus:border-primary rounded-lg shadow-sm"
    v-model="model"
    :name="name"
    :type="type"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  name: "TextField",
  watch: {
    model(val) {
      this.$emit("update:value", val);
    },
  },
  data() {
    return {
      model: this.value,
    };
  },
  props: {
    model: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
