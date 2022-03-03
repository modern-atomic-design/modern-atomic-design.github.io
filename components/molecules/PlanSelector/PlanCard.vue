<template>
  <div
    @click="$emit('click')"
    class="cursor-pointer bg-white border-4 border-white rounded-xl shadow-lg h-full w-full"
    :class="{ 'border-4 border-primary shadow-primary': selected }"
  >
    <div class="h-full px-6 py-4">
      <div class="flex justify-between">
        <h2
          class="uppercase text-lg font-semibold tracking-wider"
          :class="selected ? 'text-primary' : 'text-muted'"
        >
          {{ option.label }}
        </h2>
        <div
          class="grid items-center justify-items-center border-2 border-white rounded-full h-8 w-8"
          :class="{
            'border-primary bg-primary shadow-lg shadow-primary': selected,
          }"
          @click.prevent
          :checked="selected"
          role="radio"
        >
          <img v-if="selected" class="h-4 w-4" src="/icons/check.svg" />
        </div>
      </div>
      <div class="mt-2 flex justify-between items-center">
        <p>
          <span class="font-bold text-3xl">{{ option.data / 1000 }}</span
          ><span class="font-bold text-xl ml-2">TB</span>
          <span class="text-xl text-muted ml-1">of storage</span>
        </p>
        <p class="tracking-wide font-semibold">${{ option.price }} / mo</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlanSelector",
  props: {
    option: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
