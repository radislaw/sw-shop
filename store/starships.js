// import { getStarships } from '../api/swapi'
import { SET_STARSHIPS, SET_LOADING } from './mutationTypes'

export const state = () => ({
  starships: [],
  loading: false
})

export const mutations = {
  [SET_STARSHIPS](state, starships) {
    state.starships = starships
  },
  [SET_LOADING](state, bool) {
    state.loading = bool
  }
}

export const actions = {
  async getStarships({ commit }) {
    let currentPage = 'https://swapi.co/api/starships'
    let result = []
    while (currentPage) {
      await this.$axios.get(currentPage)
        .then(({ data }) => {
          result = [...result, ...data.results]
          currentPage = data.next
        })
        .catch(console.log)
    }
    commit(SET_STARSHIPS, result)
  }
}
