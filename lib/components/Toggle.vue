<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  initialState?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  initialState: false
})

const state = ref(props.initialState)

const toggle = () => {
  state.value = !state.value
}
</script>

<template>
  <slot :state="state" :toggle="toggle" />
</template>

