<template>
  <div id="main-page" class="page">
    <h2>Product List</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Product's ID</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
          @click="toProductDetail(product.id)"
        >
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td><img :src="product.image_url" alt="product's image"></td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '../API/axios'

export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    axios({
      method: 'GET',
      url: '/products',
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(response => {
        console.log(response.data)
        this.products = response.data
      })
      .catch(err => {
        console.log(err.response.data.error)
      })
  },
  methods: {
    toProductDetail (ProductId) {
      this.$router.push({ name: 'ProductDetail', params: { id: ProductId } })
    }
  }

}
</script>

<style scoped>
  img {
    height: 150px;
  }

</style>
