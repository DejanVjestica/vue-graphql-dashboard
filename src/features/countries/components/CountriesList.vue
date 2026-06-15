<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useCountries } from '@/features/countries/composables/useCountries'
import CountriesSearch from '@/features/countries/components/CountriesSearch.vue'
import { useDebounce } from '@/composables/useDebounce'

const searchTerm = ref('')
const debounced = useDebounce(searchTerm, 300)
const { data, loading, error, executeQuery, abort } = useCountries(searchTerm)
const countries = computed(() => data.value?.countries || [])

watch(debounced, async () => {
  await executeQuery()
})

onMounted(async () => {
  await executeQuery()
})

onUnmounted(() => {
  abort()
})
</script>
<template>
  <CountriesSearch v-model="searchTerm" />
  <p v-if="loading">Loading...</p>
  <div v-else-if="error">Error: {{ error }}</div>
  <ul v-else>
    <li v-for="country in countries" :key="country.code">{{ country.name }} {{ country.emoji }}</li>
  </ul>
</template>
<style scoped></style>
