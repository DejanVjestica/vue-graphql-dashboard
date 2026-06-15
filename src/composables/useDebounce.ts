import { ref, watch, type Ref } from 'vue'
export function useDebounce<T>(source: Ref<T>, delay: number = 300) {
  const debounced = ref(source.value) as Ref<T>

  let timeout: ReturnType<typeof setTimeout> | null = null
  watch(source, (newValue) => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      debounced.value = newValue
    }, delay)
  })
  return debounced
}
