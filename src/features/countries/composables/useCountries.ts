import { useGraphQL } from '@/composables/useGraphQl'
import type { CountriesResponse, Country } from '../types/countries.types'
import { countriesQuery } from '../api/countries.query'
import { ref, type Ref } from 'vue'

export function useCountries(searchTerm: Ref<string>) {
  const countries = ref<Country[]>([])
  const { data, loading, error, executeQuery, abort } = useGraphQL<CountriesResponse>(
    countriesQuery,
    () => ({
      search: searchTerm.value,
    }),
  )

  countries.value = data.value?.countries || []

  return {
    countries,
    loading,
    error,
    executeQuery,
    abort,
  }
}
