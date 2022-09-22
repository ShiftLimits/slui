import { nextTick, ref, watch } from 'vue'

export function syncModelValue(
  props: Readonly<any>,
  emit: (event: any, payload: any) => void,
  prop = 'modelValue'
) {
  const value = ref(props[prop])

  const flush = 'sync'
  let syncing = false
  watch(
    () => props[prop],
    new_value => {
      syncing = true
      value.value = new_value
      nextTick(() => (syncing = false))
    },
    { flush, immediate: true }
  )
  watch(
    value,
    new_value => {
      if (syncing) syncing = false
      else emit(`update:${prop}`, new_value)
    },
    { flush, immediate: false }
  )

  return value
}
