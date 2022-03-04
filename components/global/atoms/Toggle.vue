<template>
  <div class="flex gap-3 items-center">
    <p style="margin: 0 !important" v-if="offLabel">{{ offLabel }}</p>
    <MWToggle :initial-state="false">
      <template #default="{ state, toggle }">
        <button
          @click="toggle"
          type="button"
          class="relative inline-flex h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
          role="switch"
          aria-checked="false"
          :class="{ 'bg-primary': state, 'bg-gray-200': !state }"
        >
          <span class="sr-only">{{ offLabel }} or {{ onLabel }}</span>
          <span
            aria-hidden="true"
            class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            :class="{ 'translate-x-5': state }"
          ></span>
        </button>
      </template>
    </MWToggle>
    <p style="margin: 0 !important" v-if="onLabel">{{ onLabel }}</p>
  </div>
</template>
<script>
export default {
  name: "Toggle",
  props: {
    offLabel: {
      type: String,
      required: false,
      default: "",
    },
    onLabel: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
