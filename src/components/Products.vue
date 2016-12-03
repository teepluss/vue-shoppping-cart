<template>
  <div class="products">
    <template v-for="products in productChunk">
      <div class="columns">
        <product v-for="product in products" :product="product" :key="product.id"></product>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Product from 'components/Product'
export default {
  name: 'products',
  mounted () {
    this.fetchProducts()
  },
  components: {
    Product
  },
  methods: {
    ...mapActions([
      'fetchProducts'
    ])
  },
  computed: {
    ...mapGetters([
      'productChunk'
    ])
  }
}
</script>
