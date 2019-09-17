import isArraysEqual from '../utils/isArraysEqual'
import { SET_STARSHIPS, SET_FILTERED_STARSHIPS, SET_FILTERS, SET_LOADING } from './mutationTypes'

export const state = () => ({
  starships: [],
  filteredStarships: [],
  filters: {},
  loading: false
})

export const getters = {
  getFilterValue: state => (key) => {
    const items = state.starships
      .map(item => `${item[key].charAt(0).toUpperCase()}${item[key].slice(1)}`)
    return new Set(items)
  }
}

export const mutations = {
  [SET_STARSHIPS](state, starships) {
    state.starships = starships
  },
  [SET_FILTERED_STARSHIPS](state, starships) {
    state.filteredStarships = starships
  },
  [SET_FILTERS](state, filters) {
    state.filters = filters
    localStorage.setItem('filters', JSON.stringify(state.filters))
  },
  [SET_LOADING](state, bool) {
    state.loading = bool
  }
}

export const actions = {
  async getStarships({ state, commit }) {
    let currentPage = 'https://swapi.co/api/starships/'
    let result = []
    while (currentPage) {
      await this.$axios.get(currentPage)
        .then(({ data }) => {
          result = [...result, ...data.results]
          currentPage = data.next
        })
        .catch(console.log)
    }
    const isEqual = isArraysEqual(state.starships, result)
    !isEqual && commit(SET_STARSHIPS, result)
  },
  searchStarship({ state, commit }, text) {
    const result = state.starships
      .filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    commit(SET_FILTERED_STARSHIPS, result)
  },
  getFilters({ commit }) {
    if (localStorage.getItem('filters')) {
      commit(SET_FILTERS, JSON.parse(localStorage.getItem('filters')))
    }
  },
  filterStarships({ state, commit }, { type, value }) {
    const filters = type ? { ...state.filters, ...{ [type]: value } } : state.filters
    commit(SET_FILTERS, filters)

    let result = state.starships
    for (const key in state.filters) {
      result = result.filter(item => item[key].toLowerCase().includes(state.filters[key].toLowerCase()))
    }

    commit(SET_FILTERED_STARSHIPS, result)
  },
  clearFilters({ state, commit }) {
    commit(SET_FILTERS, {})
    commit(SET_FILTERED_STARSHIPS, state.starships)
  }
}
