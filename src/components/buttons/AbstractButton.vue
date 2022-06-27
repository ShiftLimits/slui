<script setup lang="ts">
	import { computed, Component as ComponentType } from 'vue'
	import type { RouteLocationRaw } from 'vue-router'

	const props = defineProps<{
		to?:RouteLocationRaw,
		href?:string,
		is?:string|ComponentType,
		custom?:boolean,
		disabled?:boolean
	}>()

	const resolved_is = computed(() => {
		if (props.to) return 'router-link' // If we have a `to` prop then we are always building a `router-link`
		if (props.href) return 'a' // If a `href` prop is provided we treat this as an external link
		if (props.is) return props.is // Otherwise if an `is` prop exists, use that
		if (props.custom) return 'template'
		return 'button' // Default case will be a normal button element
	})

	const custom = computed(() => { // Is the `router-link` a custom element?
		if (props.to) { // We have a `to` prop so this is definitely going to be a `router-link`
			if (props.custom) return true // `custom` prop was passed so it is definitely custom
			if (props.is) return true // We have an `is` prop so it is definitely going to render a custom element
		}
	})
</script>

<template>
	<template v-if="resolved_is == 'template'">
		<slot
			:isExactActive="null"
			:isActive="null"
			:href="null"
			:navigate="() => {}"
			:disabled="disabled"
		/>
	</template>
	<Component v-else :is="resolved_is" v-bind="{ ...$attrs, ...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}) }" v-slot="slot" :disabled="disabled" :to="to" :custom="custom" role="button">
		<slot
			v-if="(is && !to) || !is"
			:isExactActive="slot ? slot.isExactActive : null"
			:isActive="slot ? slot.isActive : null"
			:href="slot ? slot.href : null"
			:navigate="slot ? slot.navigate : () => {}"
			:disabled="disabled"
		/>
		<Component v-else :is="is" v-bind="$attrs" @click="slot.navigate" :disabled="disabled" role="button">
			<slot
				:isExactActive="slot ? slot.isExactActive : null"
				:isActive="slot ? slot.isActive : null"
				:href="slot ? slot.href : null"
				:navigate="slot ? slot.navigate : () => {}"
				:disabled="disabled"
			/>
		</Component>
	</Component>
</template>

<style>
	a[role="button"] {
		@apply initial:text-center;
	}
</style>
