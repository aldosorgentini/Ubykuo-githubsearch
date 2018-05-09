import Vue from 'vue'
import Router from 'vue-router'
import root from '@/components/root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root/',
      component: root
    }
  ]
})
