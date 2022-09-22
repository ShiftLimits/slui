<script setup lang="ts">
import { SvgIcon, AbstractButton } from '../..'
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
    'border-primary-500 can-hover:hover:border-primary-450 can-hover:hover:bg-primary-500 can-hover:active:border-primary-350 active:border-primary-350 can-hover:active:bg-primary-350 active:bg-primary-350 text-primary-500 can-hover:hover:text-white',
  secondary:
    'border-secondary-550 can-hover:hover:border-secondary-500 can-hover:hover:bg-secondary-500 can-hover:active:border-secondary-350 active:border-secondary-350 can-hover:active:bg-secondary-350 active:bg-secondary-350 text-secondary-500 can-hover:hover:text-white',
  neutral:
    'border-neutral-500 can-hover:hover:border-neutral-450 can-hover:hover:bg-neutral-500 can-hover:active:border-neutral-350 active:border-neutral-350 can-hover:active:bg-neutral-350 active:bg-neutral-350 text-neutral-500 can-hover:hover:text-white',
  info: 'border-info-500 can-hover:hover:border-info-450 can-hover:hover:bg-info-500 can-hover:active:border-info-350 active:border-info-350 can-hover:active:bg-info-350 active:bg-info-350 text-info-500 can-hover:hover:text-white',
  success:
    'border-success-500 can-hover:hover:border-success-450 can-hover:hover:bg-success-500 can-hover:active:border-success-350 active:border-success-350 can-hover:active:bg-success-350 active:bg-success-350 text-success-500 can-hover:hover:text-white',
  warning:
    'border-warning-500 can-hover:hover:border-warning-450 can-hover:hover:bg-warning-500 can-hover:active:border-warning-350 active:border-warning-350 can-hover:active:bg-warning-350 active:bg-warning-350 text-warning-500 can-hover:hover:text-white',
  alert:
    'border-alert-500 can-hover:hover:border-alert-450 can-hover:hover:bg-alert-500 can-hover:active:border-alert-350 active:border-alert-350 can-hover:active:bg-alert-350 active:bg-alert-350 text-alert-500 can-hover:hover:text-white',
  link: 'border-link-500 can-hover:hover:border-link-450 can-hover:hover:bg-link-500 can-hover:active:border-link-350 active:border-link-350 can-hover:active:bg-link-350 active:bg-link-350 text-link-500 can-hover:hover:text-white',
  slate:
    'border-slate-500 can-hover:hover:border-slate-450 can-hover:hover:bg-slate-500 can-hover:active:border-slate-350 active:border-slate-350 can-hover:active:bg-slate-350 active:bg-slate-350 text-slate-500 can-hover:hover:text-white',
  gray: 'border-gray-500 can-hover:hover:border-gray-450 can-hover:hover:bg-gray-500 can-hover:active:border-gray-350 active:border-gray-350 can-hover:active:bg-gray-350 active:bg-gray-350 text-gray-500 can-hover:hover:text-white',
  'gray-neutral':
    'border-gray-neutral-550 can-hover:hover:border-gray-neutral-500 can-hover:hover:bg-gray-neutral-500 can-hover:active:border-gray-neutral-350 active:border-gray-neutral-350 can-hover:active:bg-gray-neutral-350 active:bg-gray-neutral-350 text-gray-neutral-500 can-hover:hover:text-white',
  zinc: 'border-zinc-500 can-hover:hover:border-zinc-450 can-hover:hover:bg-zinc-500 can-hover:active:border-zinc-350 active:border-zinc-350 can-hover:active:bg-zinc-350 active:bg-zinc-350 text-zinc-500 can-hover:hover:text-white',
  stone:
    'border-stone-500 can-hover:hover:border-stone-450 can-hover:hover:bg-stone-500 can-hover:active:border-stone-350 active:border-stone-350 can-hover:active:bg-stone-350 active:bg-stone-350 text-stone-500 can-hover:hover:text-white',
  red: 'border-red-500 can-hover:hover:border-red-450 can-hover:hover:bg-red-500 can-hover:active:border-red-350 active:border-red-350 can-hover:active:bg-red-350 active:bg-red-350 text-red-500 can-hover:hover:text-white',
  orange:
    'border-orange-500 can-hover:hover:border-orange-450 can-hover:hover:bg-orange-500 can-hover:active:border-orange-350 active:border-orange-350 can-hover:active:bg-orange-350 active:bg-orange-350 text-orange-500 can-hover:hover:text-white',
  amber:
    'border-amber-500 can-hover:hover:border-amber-450 can-hover:hover:bg-amber-500 can-hover:active:border-amber-350 active:border-amber-350 can-hover:active:bg-amber-350 active:bg-amber-350 text-amber-500 can-hover:hover:text-white',
  yellow:
    'border-yellow-500 can-hover:hover:border-yellow-450 can-hover:hover:bg-yellow-500 can-hover:active:border-yellow-350 active:border-yellow-350 can-hover:active:bg-yellow-350 active:bg-yellow-350 text-yellow-500 can-hover:hover:text-white',
  lime: 'border-lime-500 can-hover:hover:border-lime-450 can-hover:hover:bg-lime-500 can-hover:active:border-lime-350 active:border-lime-350 can-hover:active:bg-lime-350 active:bg-lime-350 text-lime-500 can-hover:hover:text-white',
  green:
    'border-green-500 can-hover:hover:border-green-450 can-hover:hover:bg-green-500 can-hover:active:border-green-350 active:border-green-350 can-hover:active:bg-green-350 active:bg-green-350 text-green-500 can-hover:hover:text-white',
  emerald:
    'border-emerald-500 can-hover:hover:border-emerald-450 can-hover:hover:bg-emerald-500 can-hover:active:border-emerald-350 active:border-emerald-350 can-hover:active:bg-emerald-350 active:bg-emerald-350 text-emerald-500 can-hover:hover:text-white',
  teal: 'border-teal-500 can-hover:hover:border-teal-450 can-hover:hover:bg-teal-500 can-hover:active:border-teal-350 active:border-teal-350 can-hover:active:bg-teal-350 active:bg-teal-350 text-teal-500 can-hover:hover:text-white',
  cyan: 'border-cyan-500 can-hover:hover:border-cyan-450 can-hover:hover:bg-cyan-500 can-hover:active:border-cyan-350 active:border-cyan-350 can-hover:active:bg-cyan-350 active:bg-cyan-350 text-cyan-500 can-hover:hover:text-white',
  sky: 'border-sky-500 can-hover:hover:border-sky-450 can-hover:hover:bg-sky-500 can-hover:active:border-sky-350 active:border-sky-350 can-hover:active:bg-sky-350 active:bg-sky-350 text-sky-500 can-hover:hover:text-white',
  blue: 'border-blue-500 can-hover:hover:border-blue-450 can-hover:hover:bg-blue-500 can-hover:active:border-blue-350 active:border-blue-350 can-hover:active:bg-blue-350 active:bg-blue-350 text-blue-500 can-hover:hover:text-white',
  indigo:
    'border-indigo-500 can-hover:hover:border-indigo-450 can-hover:hover:bg-indigo-500 can-hover:active:border-indigo-350 active:border-indigo-350 can-hover:active:bg-indigo-350 active:bg-indigo-350 text-indigo-500 can-hover:hover:text-white',
  violet:
    'border-violet-500 can-hover:hover:border-violet-450 can-hover:hover:bg-violet-500 can-hover:active:border-violet-350 active:border-violet-350 can-hover:active:bg-violet-350 active:bg-violet-350 text-violet-500 can-hover:hover:text-white',
  purple:
    'border-purple-500 can-hover:hover:border-purple-450 can-hover:hover:bg-purple-500 can-hover:active:border-purple-350 active:border-purple-350 can-hover:active:bg-purple-350 active:bg-purple-350 text-purple-500 can-hover:hover:text-white',
  fuchsia:
    'border-fuchsia-500 can-hover:hover:border-fuchsia-450 can-hover:hover:bg-fuchsia-500 can-hover:active:border-fuchsia-350 active:border-fuchsia-350 can-hover:active:bg-fuchsia-350 active:bg-fuchsia-350 text-fuchsia-500 can-hover:hover:text-white',
  pink: 'border-pink-500 can-hover:hover:border-pink-450 can-hover:hover:bg-pink-500 can-hover:active:border-pink-350 active:border-pink-350 can-hover:active:bg-pink-350 active:bg-pink-350 text-pink-500 can-hover:hover:text-white',
  rose: 'border-rose-500 can-hover:hover:border-rose-450 can-hover:hover:bg-rose-500 can-hover:active:border-rose-350 active:border-rose-350 can-hover:active:bg-rose-350 active:bg-rose-350 text-rose-500 can-hover:hover:text-white'
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
    class="relative cursor-pointer disabled:cursor-not-allowed border transition-color duration-50 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-1/8"
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
      class="absolute rounded-inherit inset-0 border-gradient-to-b from-neutral-650/80 to-neutral-600/70"
    ></div>
    <div class="trim-both" :class="{ 'opacity-0': loading }"><slot /></div>
  </AbstractButton>
</template>
