import * as types from '../../mutation-types'

// The magic path come from webpack.
import { _, request } from 'utils'

export default {
  state: {
    items: []
  },
  mutations: {
    [types.RETRIEVE_PRODUCTS] (state, { products }) {
      state.items = products
    }
  },
  getters: {
    productChunk: state => {
      return _.chunk(state.items, 4)
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      request.get('/products.json')
        .then((res) => {
          const products = res.data
          commit(types.RETRIEVE_PRODUCTS, { products })
        })
    }
  }
}
