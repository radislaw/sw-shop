// import { getStarships } from '../api/swapi'
import { SET_STARSHIPS } from './mutationTypes'

export const state = () => ({
  starships: []
})

export const mutations = {
  [SET_STARSHIPS](state, starships) {
    state.starships = starships
  }
}

export const actions = {
  async getStarships({ commit }) {
    await this.$axios.get('https://swapi.co/api/starships')
      .then(({ data }) => {
        commit(SET_STARSHIPS, data.results)
      })
  }
}
