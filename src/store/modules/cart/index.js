import * as types from '../../mutation-types'
import { _ } from 'utils'

export default {
  state: {
    items: JSON.parse(window.localStorage.getItem('vue-shopping-cart') || '[]')
  },
  mutations: {
    [types.ADD_CART] (state, { product }) {
      const record = state.items.find(p => p.id === product.id)
      if (!record) {
        state.items.push({
          ...product,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    },
    [types.DEL_CART] (state, { product }) {
      state.items = state.items.filter(p => p.id !== product.id)
    },
    [types.UPD_CART] (state, { product, quantity }) {
      const record = state.items.find(p => p.id === product.id)
      record.quantity = quantity
    }
  },
  getters: {
    summary (state) {
      return _.sumBy(state.items, (p) => {
        return p.quantity * p.price
      })
    }
  },
  actions: {
    addToCart ({ commit }, product) {
      commit(types.ADD_CART, { product })
    },
    removeFromCart ({ commit }, product) {
      commit(types.DEL_CART, { product })
    },
    updateQuantity ({ commit }, { product, quantity }) {
      commit(types.UPD_CART, { product, quantity })
    }
  }
}
