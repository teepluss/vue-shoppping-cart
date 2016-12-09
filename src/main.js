import Vue from 'vue'
import 'bulma/bulma.sass'
import 'font-awesome/css/font-awesome.css'
import App from './App'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
