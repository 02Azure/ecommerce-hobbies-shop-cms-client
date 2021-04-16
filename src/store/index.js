import axios from '../API/axios'
import toast from '../API/sweetalert-toast'
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
          if (response.data.role === 'admin') {
            context.commit('setUsername', { username: response.data.username })
            context.commit('setLoginStatus', { status: true })

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('username', response.data.username)

            router.push({ name: 'Home' })

            toast.fire({
              icon: 'success',
              iconColor: 'deepskyblue',
              title: `Welcome, ${response.data.username}!`,
              background: 'azure'
            })
          } else {
            const err = {
              response: {
                data: {
                  error: 'Only admin can access this site'
                }
              }
            }
            throw err
          }
        })

        .catch(err => {
          toast.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    logout (context) {
      context.commit('setLoginStatus', { status: false })
      context.commit('setUsername', { username: '' })
      localStorage.clear()

      toast.fire({
        icon: 'info',
        title: 'Successfully logged out'
      })
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
          toast.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
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
          toast.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose',
            timer: 5000
          })
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
          toast.fire({
            icon: 'success',
            title: 'New product has been successfully added!'
          })
          router.push({ name: 'Home' })
        })

        .catch(err => {
          let msg

          if (Array.isArray(err.response.data.error)) {
            msg = err.response.data.error.join('\n')
          } else {
            msg = err.response.data.error
          }

          toast.fire({
            icon: 'error',
            title: msg,
            background: 'mistyrose',
            timer: 5000
          })
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
          image_url: payload.product.image_url,
          stock: payload.product.stock,
          price: payload.product.price,
          category: payload.product.category,
          detail: payload.product.detail
        }
      })
        .then(response => {
          toast.fire({
            icon: 'success',
            title: 'Changes has been successfully saved'
          })
          router.push({ name: 'ProductDetail', params: { id: productId } })
        })

        .catch(err => {
          toast.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose',
            timer: 5000
          })
        })
    },

    deleteProduct (context, payload) {
      const productId = router.currentRoute.params.id
      toast.fire({
        title: 'Are you sure?',
        text: 'This will permanently delete this product',
        toast: false,
        position: 'center',
        icon: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonText: 'Yes'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              method: 'DELETE',
              url: `/products/${productId}`,
              headers: {
                access_token: localStorage.access_token
              }
            })
              .then(response => {
                toast.fire({
                  icon: 'success',
                  title: 'Product has been successfully deleted'
                })
                router.push({ name: 'Home' })
              })
              .catch(err => {
                toast.fire({
                  icon: 'error',
                  title: err.response.data.error,
                  background: 'mistyrose'
                })
              })
          }
        })
    }
  }
})

export default store
