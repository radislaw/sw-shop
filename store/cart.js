import { SET_PRODUCTS, SET_LOADING } from './mutationTypes'

export const state = () => ({
  products: []
})

export const getters = {
  totalProductsPrice: state => state.products.reduce((total, product) => {
    return total + +product.cost_in_credits
  }, 0)
}

export const mutations = {
  [SET_PRODUCTS](state, products) {
    state.products = products
  },
  [SET_LOADING](state, bool) {
    state.loading = bool
  }
}

export const actions = {
  addToCart({ commit, state }, product) {
    commit(SET_PRODUCTS, [...state.products, product])
  },
  removeFromCart({ commit, state }, product) {
    const newProducts = state.products.filter(item => item.name !== product.name)
    commit(SET_PRODUCTS, newProducts)
  },
  clearCart({ commit }) {
    commit(SET_PRODUCTS, [])
  }
}
