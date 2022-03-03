<template>
  <nuxt-link :to="link">
    <div
      class="group px-4 cursor-pointer hover:bg-gray-100 hover:border-gray-100 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full"
    >
      <p class="text-lg font-semibold group-hover:underline">{{ title }}</p>
      <div
        class="group-hover:bg-primary-hover group-hover:border-primary-hover group-hover:text-white"
      >
        <slot name="button"></slot>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
