<template>
  <nuxt-link :to="link">
    <div
      class="px-4 cursor-pointer hover:bg-gray-50 hover:border-gray-50 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full"
    >
      <p class="text-lg font-semibold">{{ title }}</p>
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
