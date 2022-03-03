<template>
  <MWRadioGroup>
    <template #default="{ selected, select }">
      <div class="grid gap-4">
        <PlanCard
          v-for="(option, index) in options"
          :key="index"
          :option="option"
          :selected="index === selected"
          @click="() => select(index)"
        />
      </div>
    </template>
  </MWRadioGroup>
</template>
<script>
export default {
  name: "PlanSelector",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
