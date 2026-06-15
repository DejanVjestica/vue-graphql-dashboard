import { ref } from 'vue'
import { fetchGraphQL } from '@/graphql/fetchGraphQL'

export function useGraphQL<T>(query: string, getVariables?: () => Record<string, unknown>) {
  const data = ref<T | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const controller = ref<AbortController | null>(null)

  function abort() {
    if (controller.value) {
      controller.value.abort()
      controller.value = null
    }
  }

  async function executeQuery() {
    loading.value = true
    error.value = null
    controller.value = new AbortController()

    try {
      const variables = getVariables?.()
      data.value = await fetchGraphQL<T>(query, variables, controller.value.signal)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, executeQuery, abort }
}
