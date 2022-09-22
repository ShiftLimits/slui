<script setup lang="ts">
import { AbstractButton } from '../AbstractButton'
import { ComponentColors } from '../../../types'
import { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    color?: ComponentColors
    disabled?: boolean
  }>(),
  {
    color: 'link'
  }
)

const color_map: { [Property in ComponentColors]: string } = {
  primary: 'text-primary-400 hover:text-primary-200 ring-primary-500',
  secondary: 'text-secondary-400 hover:text-secondary-200 ring-secondary-500',
  neutral: 'text-neutral-400 hover:text-neutral-200 ring-neutral-500',
  info: 'text-info-400 hover:text-info-200 ring-info-500',
  success: 'text-success-400 hover:text-success-200 ring-success-500',
  warning: 'text-warning-400 hover:text-warning-200 ring-warning-500',
  alert: 'text-alert-400 hover:text-alert-200 ring-alert-500',
  link: 'text-link-400 hover:text-link-200 ring-link-500',
  slate: 'text-slate-400 hover:text-slate-200 ring-slate-500',
  gray: 'text-gray-400 hover:text-gray-200 ring-gray-500',
  'gray-neutral':
    'text-gray-neutral-400 hover:text-gray-neutral-200 ring-gray-neutral-500',
  zinc: 'text-zinc-400 hover:text-zinc-200 ring-zinc-500',
  stone: 'text-stone-400 hover:text-stone-200 ring-stone-500',
  red: 'text-red-400 hover:text-red-200 ring-red-500',
  orange: 'text-orange-400 hover:text-orange-200 ring-orange-500',
  amber: 'text-amber-400 hover:text-amber-200 ring-amber-500',
  yellow: 'text-yellow-400 hover:text-yellow-200 ring-yellow-500',
  lime: 'text-lime-400 hover:text-lime-200 ring-lime-500',
  green: 'text-green-400 hover:text-green-200 ring-green-500',
  emerald: 'text-emerald-400 hover:text-emerald-200 ring-emerald-500',
  teal: 'text-teal-400 hover:text-teal-200 ring-teal-500',
  cyan: 'text-cyan-400 hover:text-cyan-200 ring-cyan-500',
  sky: 'text-sky-400 hover:text-sky-200 ring-sky-500',
  blue: 'text-blue-400 hover:text-blue-200 ring-blue-500',
  indigo: 'text-indigo-400 hover:text-indigo-200 ring-indigo-500',
  violet: 'text-violet-400 hover:text-violet-200 ring-violet-500',
  purple: 'text-purple-400 hover:text-purple-200 ring-purple-500',
  fuchsia: 'text-fuchsia-400 hover:text-fuchsia-200 ring-fuchsia-500',
  pink: 'text-pink-400 hover:text-pink-200 ring-pink-500',
  rose: 'text-rose-400 hover:text-rose-200 ring-rose-500'
}
</script>

<template>
  <AbstractButton
    is="a"
    :to="to"
    class="underline font-bold cursor-pointer transition-color duration-50 focus-visible:outline-none focus-visible:ring-1/8 visited:text-violet-400"
    :class="{ [color_map[color]]: true }"
    ><slot
  /></AbstractButton>
</template>
