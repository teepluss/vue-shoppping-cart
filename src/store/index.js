import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

const debug = true

const localStoragePlugin = store => {
  store.subscribe((mutation, { cart }) => {
    window.localStorage.setItem('vue-shopping-cart', JSON.stringify(cart.items))
  })
}
const plugins = [localStoragePlugin]

export default new Vuex.Store({
  modules: {
    product,
    cart
  },
  strict: debug,
  plugins
})
