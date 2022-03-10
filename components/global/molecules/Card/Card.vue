<template>
  <nuxt-link :to="link">
    <div
      class="group hover:bg-gray-100 hover:border-gray-100 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full flex sm:justify-between justify-center flex-wrap items-center px-6"
    >
      <p
        style="margin: 0 !important"
        class="text-lg font-semibold"
        :class="{ 'group-hover:underline': !buttonLabel }"
      >
        <slot></slot>
      </p>

      <button
        v-if="buttonLabel"
        class="rounded-lg border-2 border-primary py-3 px-4 uppercase font-semibold bg-transparent text-lg text-primary group-hover:text-white group-hover:bg-primary-hover group-hover:border-primary-hover"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "Card",
  props: {
    link: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
