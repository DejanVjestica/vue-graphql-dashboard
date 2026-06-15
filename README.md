# 🌍 Vue GraphQL Countries Dashboard

![Vue](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Unit%20Testing-6E9F18?logo=vitest&logoColor=white)
![Status](https://img.shields.io/badge/status-active-success)

A Vue 3 + TypeScript application demonstrating a modular GraphQL data layer, composable architecture, and reactive search with request cancellation.

The project showcases a fully custom GraphQL client built on the Fetch API, with a scalable composable structure and clean separation between UI, domain logic, and API layer.

---

## 🚀 Features

- Vue 3 Composition API (`<script setup>`)
- TypeScript with strict typing
- Custom GraphQL client using Fetch API
- Composable architecture (`useGraphQL`, `useCountries`)
- Real-time search with reactive state
- Request cancellation using `AbortController`
- Clean separation of concerns (API / composables / UI)
- Vite for fast development and build
- Unit testing with Vitest

## 🛠 Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Vite
- GraphQL (custom Fetch-based client)
- Native Web APIs (AbortController, Fetch)
- Vitest (unit testing framework)

---

## 🔍 GraphQL Integration

The application uses the public Countries GraphQL API:

https://countries.trevorblades.com/

### Example query:

```graphql
query Countries($search: String) {
  countries(filter: { name: { regex: $search } }) {
    code
    name
    emoji
  }
}
```
