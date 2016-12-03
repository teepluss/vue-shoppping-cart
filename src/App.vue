<template>
  <div id="app">
    <cheader></cheader>
    <section class="section content">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-three-quarters">
            <products></products>
          </div>
          <div class="column">
            <carts></carts>
          </div>
        </div>
      </div>
    </section>
    <cfooter></cfooter>
  </div>
</template>

<script>
import Header from 'components/Header'
import Footer from 'components/Footer'
import Products from 'components/Products'
import Carts from 'components/Carts'

export default {
  name: 'app',
  components: {
    'cheader': Header,
    'cfooter': Footer,
    Products,
    Carts
  }
}
</script>
<style>
  html { background-color: #FFFFFF }
</style>
