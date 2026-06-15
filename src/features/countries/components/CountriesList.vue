<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useCountries } from '../composables/useCountries'
import CountriesSearch from './CountriesSearch.vue'

const searchTerm = ref('')
const { data, loading, error, executeQuery, abort } = useCountries(searchTerm)

watch(searchTerm, async () => {
  await executeQuery()
})

const countries = computed(() => data.value?.countries || [])

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
