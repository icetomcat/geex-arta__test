import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount: 0
  },
  mutations: {
    ADD_TO_CART(state, count) {
      state.cartCount += count;
    }
  },
  actions: {
    addToCart({
      commit
    }, count) {
      commit('ADD_TO_CART', count)
    }
  },
  getters: {
    cartCount(state) {
      return state.cartCount
    }
  }
})
