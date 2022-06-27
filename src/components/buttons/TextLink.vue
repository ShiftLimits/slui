<script setup lang="ts">
  import AbstractButton from './AbstractButton.vue'
  import { ComponentColors, ComponentSize } from '../types'
  import { RouteLocationRaw } from 'vue-router'

  const props = withDefaults(defineProps<{
		to?:RouteLocationRaw,
		href?:string,
    color?:ComponentColors,
		disabled?:boolean
	}>(), {
    color: 'sky'
  })

  const color_map:{[Property in ComponentColors]:string} = {
    'sky': 'text-sky-300 hover:text-sky-100',
    'violet': 'text-violet-300 hover:text-violet-100'
  }
</script>

<template>
  <AbstractButton is="a" v-bind="{ to, href, ...$attrs }" class="underline font-bold transition-color duration-50 focus-visible:outline-none focus-visible:ring-1/8 ring-sky-500 visited:text-violet-400" :class="{[color_map[color]]:true}"><slot /></AbstractButton>
</template>