import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Add from '../views/Add.vue'
import ProductEdit from '../views/Edit.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
