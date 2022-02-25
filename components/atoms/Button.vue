<template>
  <button
    class="rounded-lg border-2 border-primary py-3 px-4 uppercase font-semibold"
    :class="
      type === 'secondary'
        ? 'text-primary hover:text-white hover:bg-primary'
        : 'bg-primary text-white hover:bg-primary-hover hover:border-primary-hover'
    "
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (val) => ["primary", "secondary"].includes(val),
    },
  },
};
</script>
