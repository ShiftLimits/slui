<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { ComponentSize } from '../../../types'
const SvgIcon = defineAsyncComponent(
  () => import('../../media/SvgIcon/SvgIcon.vue')
)

const props = withDefaults(
  defineProps<{
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
    size: 'base',
    valid: undefined
  }
)

const size_map: { [Property in ComponentSize]: string } = {
  xs: 'initial:text-sm initial:p-3/8 gap-1/4',
  sm: 'initial:p-1/2 gap-1/4',
  base: 'initial:text-lg initial:p-3/4 gap-1/4',
  lg: 'initial:text-xl initial:p-1 gap-1/2'
}

// const left_size_map: { [Property in ComponentSize]: string } = {
//   xs: 'pl-3/8',
//   sm: 'pl-1/2',
//   base: 'pl-3/4',
//   lg: 'pl-1'
// }

// const right_size_map: { [Property in ComponentSize]: string } = {
//   xs: 'pr-3/8',
//   sm: 'pr-1/2',
//   base: 'pr-3/4',
//   lg: 'pr-1'
// }

const icon_size_map: { [Property in ComponentSize]: string } = {
  xs: 'h-[1em]',
  sm: 'h-[1.25em] -m-1/8',
  base: 'h-[1.5em] -m-1/4',
  lg: 'h-[1.75em] -m-3/8'
}

/**
 *  `true` means input is valid, `false` means invalid, `undefined` means neither valid nor invalid
 */
const valid = computed(() => {
  if (props.valid != undefined) {
    if (typeof props.valid == 'string') {
      if (props.valid == 'false') return false
      else if (props.valid == 'true') return true
    } else {
      return props.valid
    }
  }

  return undefined
})

const valid_classes = computed(() => {
  if (valid.value == true) return 'ring-success-500'
  else if (valid.value == false) return 'ring-1/8 ring-alert-500'
  return 'ring-info-500'
})
</script>

<template>
  <div
    class="group flex items-center initial:rounded-3/8 text-white border !border-neutral-600 bg-neutral-750 initial:w-full focus-within:z-10 focus-within:outline-none focus-within:ring-1/8 focus-within:ring-info-500 focus-within:!border-info-400"
    :class="{
      [valid_classes]: true,
      [size_map[size]]: true
    }"
    :style="`max-width: calc(var(--twgl-current-base) * 1.75 + ${inputSize}ch);`"
  >
    <slot name="left" />
    <div v-if="icon || leftIcon" class="flex items-center">
      <SvgIcon
        v-if="icon || leftIcon"
        :name="icon || leftIcon || ''"
        class="fill-current mr-0"
        :class="{ [icon_size_map[size]]: true }"
      />
    </div>
    <div class="flex-1 trim-both input-padding"><slot /></div>
    <div
      v-if="rightIcon || valid != undefined || loading"
      class="flex items-center"
    >
      <SvgIcon
        v-if="loading"
        name="loader"
        class="animate-[spin_500ms_linear_infinite] fill-current"
        :class="{ [icon_size_map[size]]: true }"
      />
      <SvgIcon
        v-if="valid == true"
        name="checkmark-circle"
        class="fill-success-400 ml-0"
        :class="{ [icon_size_map[size]]: true }"
      />
      <SvgIcon
        v-if="valid == false"
        name="close-circle"
        class="fill-alert-400 ml-0"
        :class="{ [icon_size_map[size]]: true }"
      />
      <SvgIcon
        v-if="rightIcon"
        :name="rightIcon"
        class="fill-current ml-0"
        :class="{ [icon_size_map[size]]: true }"
      />
    </div>
    <slot name="right" />
  </div>
</template>

<style>
.input-padding:not(:first-child) > input {
  padding-left: 0;
}
.input-padding:not(:last-child) > input {
  padding-right: 0;
}
</style>
