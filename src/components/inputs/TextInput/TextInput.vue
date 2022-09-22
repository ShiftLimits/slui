<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { ComponentSize } from '../../../types'
import { syncModelValue } from '../../../utils'
import InputBase from '../InputBase/InputBase.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number | string
    size?: ComponentSize
    inputSize?: number | string
    icon?: string
    leftIcon?: string
    rightIcon?: string
    disabled?: boolean
    loading?: boolean
    valid?: boolean | string
  }>(),
  {
    modelValue: '',
    size: 'base',
    inputSize: '20',
    valid: undefined
  }
)

const size_map: { [Property in ComponentSize]: string } = {
  // xs: 'initial:text-sm initial:p-3/8',
  // sm: ' initial:p-1/2',
  // base: 'initial:text-lg initial:p-3/4',
  // lg: 'initial:text-xl initial:p-1'
  xs: '',
  sm: '',
  base: '',
  lg: ''
}

const emit = defineEmits(['update:modelValue'])
const value = syncModelValue(props, emit)

const attributes = useAttrs()
const input_attrs = computed(() => {
  const attrs = { ...attributes }
  delete attrs.class

  return attrs
})
</script>

<template>
  <InputBase
    v-bind="{
      icon,
      leftIcon,
      rightIcon,
      disabled,
      loading,
      valid,
      size,
      inputSize,
      class: $attrs.class
    }"
  >
    <input
      ref="input"
      v-model="value"
      type="text"
      v-bind="input_attrs"
      :disabled="disabled"
      :size="inputSize"
      class="border-0 p-0 bg-transparent focus:ring-0 focus:outline-none w-full"
      :class="{ [size_map[size]]: true }"
    />
  </InputBase>
</template>
