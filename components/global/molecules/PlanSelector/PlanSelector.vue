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

<script setup lang="ts">
interface PlanOption {
  label: string
  data: number
  price: number
}

defineProps<{
  options: PlanOption[]
}>();
</script>
