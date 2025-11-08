<template>
  <input
    class="px-4 py-3 h-14 text-lg border-white placeholder-gray-400 ring-0 border-2 focus:border-primary rounded-lg shadow-sm"
    v-model="model"
    :name="name"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  name?: string
  type?: string
  placeholder?: string
}>(), {
  modelValue: '',
  name: '',
  type: 'text',
  placeholder: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>
