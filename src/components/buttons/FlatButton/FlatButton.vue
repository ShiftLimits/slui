<script setup lang="ts">
import { SvgIcon, AbstractButton } from '../../'
import { ComponentColors, ComponentSize } from '../../../types'
import { RouteLocationRaw } from 'vue-router'
import { Component as ComponentType } from 'vue'

withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    is?: string | ComponentType
    color?: ComponentColors
    size?: ComponentSize
    rounded?: boolean
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    color: 'primary',
    size: 'base',
    rounded: false
  }
)

const color_map: { [Property in ComponentColors]: string } = {
  primary:
    'bg-primary-500 can-hover:hover:bg-primary-450 can-hover:active:bg-primary-350 active:bg-primary-350 text-neutral-150 can-hover:hover:text-white border-primary-600',
  secondary:
    'bg-secondary-550 can-hover:hover:bg-secondary-500 can-hover:active:bg-secondary-400 active:bg-secondary-350 text-neutral-150 can-hover:hover:text-white border-secondary-650',
  neutral:
    'bg-neutral-500 can-hover:hover:bg-neutral-450 can-hover:active:bg-neutral-350 active:bg-neutral-350 text-neutral-150 can-hover:hover:text-white border-neutral-600',
  info: 'bg-info-500 can-hover:hover:bg-info-450 can-hover:active:bg-info-350 active:bg-info-350 text-info-150 can-hover:hover:text-white border-info-600',
  success:
    'bg-success-500 can-hover:hover:bg-success-450 can-hover:active:bg-success-350 active:bg-success-350 text-success-150 can-hover:hover:text-white border-success-600',
  warning:
    'bg-warning-500 can-hover:hover:bg-warning-450 can-hover:active:bg-warning-350 active:bg-warning-350 text-warning-150 can-hover:hover:text-white border-warning-600',
  alert:
    'bg-alert-500 can-hover:hover:bg-alert-450 can-hover:active:bg-alert-350 active:bg-alert-350 text-alert-150 can-hover:hover:text-white border-alert-600',
  link: 'bg-link-500 can-hover:hover:bg-link-450 can-hover:active:bg-link-350 active:bg-link-350 text-neutral-150 can-hover:hover:text-white border-link-600',
  slate:
    'bg-slate-500 can-hover:hover:bg-slate-450 can-hover:active:bg-slate-350 active:bg-slate-350 text-neutral-150 can-hover:hover:text-white border-slate-600',
  gray: 'bg-gray-500 can-hover:hover:bg-gray-450 can-hover:active:bg-gray-350 active:bg-gray-350 text-neutral-150 can-hover:hover:text-white border-gray-600',
  'gray-neutral':
    'bg-gray-neutral-550 can-hover:hover:bg-gray-neutral-500 can-hover:active:bg-gray-neutral-400 active:bg-gray-neutral-350 text-neutral-150 can-hover:hover:text-white border-gray-neutral-600',
  zinc: 'bg-zinc-500 can-hover:hover:bg-zinc-450 can-hover:active:bg-zinc-350 active:bg-zinc-350 text-neutral-150 can-hover:hover:text-white border-zinc-600',
  stone:
    'bg-stone-500 can-hover:hover:bg-stone-450 can-hover:active:bg-stone-350 active:bg-stone-350 text-neutral-150 can-hover:hover:text-white border-stone-600',
  red: 'bg-red-500 can-hover:hover:bg-red-450 can-hover:active:bg-red-350 active:bg-red-350 text-neutral-150 can-hover:hover:text-white border-red-600',
  orange:
    'bg-orange-500 can-hover:hover:bg-orange-450 can-hover:active:bg-orange-350 active:bg-orange-350 text-neutral-150 can-hover:hover:text-white border-orange-600',
  amber:
    'bg-amber-500 can-hover:hover:bg-amber-450 can-hover:active:bg-amber-350 active:bg-amber-350 text-neutral-150 can-hover:hover:text-white border-amber-600',
  yellow:
    'bg-yellow-500 can-hover:hover:bg-yellow-450 can-hover:active:bg-yellow-350 active:bg-yellow-350 text-neutral-150 can-hover:hover:text-white border-yellow-600',
  lime: 'bg-lime-500 can-hover:hover:bg-lime-450 can-hover:active:bg-lime-350 active:bg-lime-350 text-neutral-150 can-hover:hover:text-white border-lime-600',
  green:
    'bg-green-500 can-hover:hover:bg-green-450 can-hover:active:bg-green-350 active:bg-green-350 text-neutral-150 can-hover:hover:text-white border-green-600',
  emerald:
    'bg-emerald-500 can-hover:hover:bg-emerald-450 can-hover:active:bg-emerald-350 active:bg-emerald-350 text-neutral-150 can-hover:hover:text-white border-emerald-600',
  teal: 'bg-teal-500 can-hover:hover:bg-teal-450 can-hover:active:bg-teal-350 active:bg-teal-350 text-neutral-150 can-hover:hover:text-white border-teal-600',
  cyan: 'bg-cyan-500 can-hover:hover:bg-cyan-450 can-hover:active:bg-cyan-350 active:bg-cyan-350 text-neutral-150 can-hover:hover:text-white border-cyan-600',
  sky: 'bg-sky-500 can-hover:hover:bg-sky-450 can-hover:active:bg-sky-350 active:bg-sky-350 text-neutral-150 can-hover:hover:text-white border-sky-600',
  blue: 'bg-blue-500 can-hover:hover:bg-blue-450 can-hover:active:bg-blue-350 active:bg-blue-350 text-neutral-150 can-hover:hover:text-white border-blue-600',
  indigo:
    'bg-indigo-500 can-hover:hover:bg-indigo-450 can-hover:active:bg-indigo-350 active:bg-indigo-350 text-neutral-150 can-hover:hover:text-white border-indigo-600',
  violet:
    'bg-violet-500 can-hover:hover:bg-violet-450 can-hover:active:bg-violet-350 active:bg-violet-350 text-neutral-150 can-hover:hover:text-white border-violet-600',
  purple:
    'bg-purple-500 can-hover:hover:bg-purple-450 can-hover:active:bg-purple-350 active:bg-purple-350 text-neutral-150 can-hover:hover:text-white border-purple-600',
  fuchsia:
    'bg-fuchsia-500 can-hover:hover:bg-fuchsia-450 can-hover:active:bg-fuchsia-350 active:bg-fuchsia-350 text-neutral-150 can-hover:hover:text-white border-fuchsia-600',
  pink: 'bg-pink-500 can-hover:hover:bg-pink-450 can-hover:active:bg-pink-350 active:bg-pink-350 text-neutral-150 can-hover:hover:text-white border-pink-600',
  rose: 'bg-rose-500 can-hover:hover:bg-rose-450 can-hover:active:bg-rose-350 active:bg-rose-350 text-neutral-150 can-hover:hover:text-white border-rose-600'
}

const size_map: { [Property in ComponentSize]: string } = {
  xs: 'initial:rounded-1/4 initial:text-sm initial:px-3/8 initial:py-1/4',
  sm: 'initial:rounded-3/8 initial:text-sm initial:px-1/2 initial:py-1/2',
  base: 'initial:rounded-1/2 initial:px-1 initial:py-3/4',
  lg: 'initial:rounded-5/8 initial:text-lg initial:px-1-1/2 initial:py-1'
}

const icon_size_map: { [Property in ComponentSize]: string } = {
  xs: 'h-1/2',
  sm: 'h-3/4',
  base: 'h-1',
  lg: 'h-1-1/2'
}
</script>

<template>
  <AbstractButton
    v-bind="{ to, is, href, disabled }"
    class="relative cursor-pointer disabled:cursor-not-allowed transition-color duration-50 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-1/8"
    :class="{
      [color_map[color]]: true,
      [size_map[size]]: true
    }"
  >
    <Transition enter-to-class="opacity-100">
      <div
        v-if="loading"
        class="absolute inset-0 flex items-center justify-center"
      >
        <SvgIcon
          name="loader"
          class="fill-current animate-[spin_500ms_linear_infinite]"
          :class="{
            [icon_size_map[size]]: true
          }"
        />
      </div>
    </Transition>
    <div
      v-if="disabled"
      class="absolute rounded-inherit inset-0 bg-gradient-to-b from-neutral-650/80 to-neutral-600/70"
    ></div>
    <div class="trim-both" :class="{ 'opacity-0': loading }"><slot /></div>
  </AbstractButton>
</template>
