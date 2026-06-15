const countriesQuery = `
query Countries($search: String = "") {
    countries(filter: { name: { regex: $search} }) {
      code
      name
      emoji
    }
  }
`

export { countriesQuery }
