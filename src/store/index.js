import axios from '../API/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: '',
    products: [],
    productDetail: {}

  },

  mutations: {
    setLoginStatus (state, payload) {
      state.isLoggedIn = payload.status
    },

    setUsername (state, payload) {
      state.username = payload.username
    },

    setProducts (state, payload) {
      state.products = payload.products
    },

    setProductDetail (state, payload) {
      state.productDetail = payload.product
    }
  },

  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          username: payload.username,
          password: payload.password
        }
      })
        .then(response => {
          context.commit('setUsername', { username: response.data.username })
          context.commit('setLoginStatus', { status: true })
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('username', response.data.username)
          router.push({ name: 'Home' })
        })

        .catch(err => {
          console.log(err.response.data.error)
        })
    },

    logout (context) {
      context.commit('setLoginStatus', { status: false })
      context.commit('setUsername', { username: '' })
      localStorage.clear()
      router.push({ name: 'Login' })
    },

    getAllProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(response => {
          context.commit('setProducts', { products: response.data })
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },

    getOneProduct (context) {
      const productId = router.currentRoute.params.id
      axios({
        method: 'GET',
        url: `/products/${productId}`
      })
        .then(response => {
          const { id, name, stock, price, category, detail } = response.data
          context.commit('setProductDetail', {
            product: {
              id,
              name,
              image_url: response.data.image_url,
              stock,
              price,
              category,
              detail
            }
          })
        })

        .catch(err => {
          router.push({ name: 'NotFound' })
          console.log(err.response.data.error)
        })
    },

    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.product.name,
          image_url: payload.product.image_url,
          stock: payload.product.stock,
          price: payload.product.price,
          category: payload.product.category,
          detail: payload.product.detail
        }
      })
        .then(response => {
          router.push({ name: 'Home' })
        })

        .catch(err => {
          console.log(err.response.data.error)
        })
    },

    editProduct (context, payload) {
      const productId = router.currentRoute.params.id
      axios({
        method: 'PUT',
        url: `/products/${productId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.product.name,
          stock: payload.product.stock,
          price: payload.product.price,
          category: payload.product.category,
          detail: payload.product.detail
        }
      })
        .then(response => {
          router.push({ name: 'ProductDetail', params: { id: productId } })
        })

        .catch(err => {
          console.log(err.response.data.error)
        })
    },

    deleteProduct (context, payload) {
      const productId = router.currentRoute.params.id
      axios({
        method: 'DELETE',
        url: `/products/${productId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          console.log(response.data)
          router.push({ name: 'Home' })
        })

        .catch(err => {
          console.log(err.response.data.error)
        })
    }
  }
})

export default store
