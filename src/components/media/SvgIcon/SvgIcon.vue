<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ComponentColors } from '../../../types'

const props = withDefaults(
  defineProps<{
    prefix?: string
    name: string
    fallback?: string
    color?: ComponentColors
  }>(),
  {
    prefix: 'icon',
    fallback: 'fallback',
    color: undefined
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const fallbackId = computed(() => `#${props.prefix}-${props.fallback}`)

const color_map: { [Property in ComponentColors]: string } = {
  primary: 'fill-primary-500',
  secondary: 'fill-secondary-500',
  neutral: 'fill-neutral-500',
  info: 'fill-info-500',
  success: 'fill-success-500',
  warning: 'fill-warning-500',
  alert: 'fill-alert-500',
  link: 'fill-link-500',
  slate: 'fill-slate-500',
  gray: 'fill-gray-500',
  'gray-neutral': 'fill-gray-neutral-500',
  zinc: 'fill-zinc-500',
  stone: 'fill-stone-500',
  red: 'fill-red-500',
  orange: 'fill-orange-500',
  amber: 'fill-amber-500',
  yellow: 'fill-yellow-500',
  lime: 'fill-lime-500',
  green: 'fill-green-500',
  emerald: 'fill-emerald-500',
  teal: 'fill-teal-500',
  cyan: 'fill-cyan-500',
  sky: 'fill-sky-500',
  blue: 'fill-blue-500',
  indigo: 'fill-indigo-500',
  violet: 'fill-violet-500',
  purple: 'fill-purple-500',
  fuchsia: 'fill-fuchsia-500',
  pink: 'fill-pink-500',
  rose: 'fill-rose-500'
}

const use = ref<SVGUseElement>()

onMounted(() => {
  if (use.value) {
    if (document.getElementById(symbolId.value.substring(1)) == null) {
      use.value.href.baseVal = fallbackId.value
    }
  }
})
</script>

<template>
  <svg
    viewBox="0 0 1 1"
    class="initial:h-[2em] initial:fill-current"
    :class="{ [color ? color_map[color] : '']: true }"
    aria-hidden="true"
  >
    <use ref="use" :href="symbolId" />
  </svg>
</template>
