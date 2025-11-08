<template>
  <TextField v-bind="$attrs">
    <slot />
  </TextField>
</template>

<script setup lang="ts">
import TextField from '~/components/global/atoms/TextField.vue'
</script>
