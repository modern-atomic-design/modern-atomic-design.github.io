<template>
  <MyButton v-bind="$attrs">
    <slot />
  </MyButton>
</template>

<script setup lang="ts">
import MyButton from '~/components/global/atoms/MyButton.vue'
</script>
