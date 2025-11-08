<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  initialSelected?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialSelected: 0
})

const selected = ref(props.initialSelected)

const select = (index: number) => {
  selected.value = index
}
</script>

<template>
  <slot :selected="selected" :select="select" />
</template>
