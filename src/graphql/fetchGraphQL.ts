const apiURL = `${import.meta.env.VITE_GRAPHQL_ENDPOINT}`

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    signal,
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(json.errors[0].message)
  }

  return json.data as T
}
