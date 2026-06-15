import { useGraphQL } from '@/composables/useGraphQl'
import type { CountriesResponse } from '../types/countries.types'
import { countriesQuery } from '../api/countries.query'

export function useCountries() {
  return useGraphQL<CountriesResponse>(countriesQuery)
}
