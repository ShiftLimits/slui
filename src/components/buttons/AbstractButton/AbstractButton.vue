<script setup lang="ts">
import { computed, Component as ComponentType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to?: RouteLocationRaw
  href?: string
  is?: string | ComponentType
  custom?: boolean
  disabled?: boolean
}>()

const resolved_is = computed(() => {
  if (props.to) return 'RouterLink' // If we have a `to` prop then we are always building a `router-link`
  if (props.href) return 'a' // If a `href` prop is provided we treat this as an external link
  if (props.is) return props.is // Otherwise if an `is` prop exists, use that
  if (props.custom) return 'template'
  return 'button' // Default case will be a normal button element
})

const custom = computed(() => {
  // Is the `router-link` a custom element?
  if (props.to) {
    // We have a `to` prop so this is definitely going to be a `router-link`
    if (props.custom) return true // `custom` prop was passed so it is definitely custom
    if (props.is) return true // We have an `is` prop so it is definitely going to render a custom element
  }
  return undefined
})

// console.log(props, resolved_is)
</script>

<template>
  <template v-if="resolved_is == 'template'">
    <slot
      :is-exact-active="null"
      :is-active="null"
      :href="null"
      :navigate="() => {}"
      :disabled="disabled"
    />
  </template>
  <Component
    :is="resolved_is"
    v-else
    v-slot="slot"
    v-bind="{
      ...$attrs,
      ...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})
    }"
    :disabled="disabled"
    :to="to"
    :custom="custom"
  >
    <slot
      v-if="(is && !to) || !is"
      :is-exact-active="slot ? slot.isExactActive : null"
      :is-active="slot ? slot.isActive : null"
      :href="slot ? slot.href : null"
      :navigate="slot ? slot.navigate : () => {}"
      :disabled="disabled"
    />
    <Component
      :is="is"
      v-else
      v-bind="$attrs"
      :disabled="disabled"
      @click="slot ? slot.navigate : () => {}"
    >
      <slot
        :is-exact-active="slot ? slot.isExactActive : null"
        :is-active="slot ? slot.isActive : null"
        :href="slot ? slot.href : null"
        :navigate="slot ? slot.navigate : () => {}"
        :disabled="disabled"
      />
    </Component>
  </Component>
</template>

<style>
a[role='button'] {
  @apply initial:text-center;
}
</style>
