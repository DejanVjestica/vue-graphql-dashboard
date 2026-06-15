import { useGraphQL } from '@/composables/useGraphQl'
import type { CountriesResponse } from '../types/countries.types'
import { countriesQuery } from '../api/countries.query'
import type { Ref } from 'vue'

export function useCountries(searchTerm: Ref<string>) {
  return useGraphQL<CountriesResponse>(countriesQuery, () => ({
    search: searchTerm.value,
  }))
}
