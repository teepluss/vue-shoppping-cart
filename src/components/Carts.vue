<template>
  <div class="box">
    <p><span class="title is-5">Items in Cart</span></p>
    <hr>
    <div v-if="!cart.items.length">Plead add product.</div>
    <div v-else>
      <div class="columns" v-for="item in cart.items" :key="item.id">
        <div class="column is-3 is-marginless">
          <div class="image">
            <img src="https://placehold.it/200x200">
          </div>
        </div>
        <div class="column is-9">
          <p>
            <strong>{{ item.name }}</strong> (${{ item.price }})
            <input type="number" class="qty" :value="item.quantity" @change="updateValue(item, $event)">
          </p>
          <a class="button is-danger is-small" @click="removeFromCart(item)">
            <span>
              Remove
            </span>
          </a>
        </div>
      </div>
      <hr>
      <div class="cart-summary level">
        <div class="level-left"><strong>Summary</strong></div>
        <div class="level-right">${{ summary | number }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { number } from 'utils'

export default {
  name: 'carts',
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'summary'
    ])
  },
  methods: {
    updateValue (item, ev) {
      this.updateQuantity({ product: item, quantity: ev.target.value })
    },
    ...mapActions([
      'removeFromCart',
      'updateQuantity'
    ])
  },
  filters: {
    number (value) {
      return number(value, 2)
    }
  }
}
</script>
<style scoped>
.qty { float: right; width: 45px; height: 30px; font-size: 1.2em; text-align: center;}
</style>
