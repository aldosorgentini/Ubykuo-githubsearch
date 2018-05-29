// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid.faSearch)
Vue.config.productionTip = false

Vue.component('top-nav', {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    resultados: [],
    buscaor: ''

  },
  components: { App },
  template: '<App/>'
})
