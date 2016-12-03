<template>
  <div class="column is-3">
    <div class="panel">
      <p class="is-marginless">
        <img src="https://placehold.it/300x300">
      </p>
      <div class="panel-block">
        <div class="columns">
          <div class="column">
            <div class="panel-block-item">{{ product.name }} (${{ product.price }})</div>
          </div>
          <div class="column has-text-right">
            <div class="panel-block-item">
              <a @click="addToCart(product)"><i class="fa fa-shopping-basket"></i></a>
            </div>
            <!-- <div class="panel-block-item">2d <i class="fa fa-calendar"></i></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'product',
  props: ['product'],
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>
