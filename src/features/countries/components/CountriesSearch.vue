<script lang="ts" setup>
const model = defineModel<string>()
</script>
<template>
  <search>
    <label for="country-search">Search for a country:</label>
    <input
      id="country-search"
      type="search"
      v-model="model"
      placeholder="Search for a country..."
    />
  </search>
</template>
<style scoped></style>
