<template>
  <div id="product-detail-page" class="page">
    <div class="row">
      <div class="image-container offset-1 col-4">
        <img :src="product.image_url" alt="product's image">
      </div>

      <div class="detail-container offset-1 col-5">
        <h2>{{ product.name }}</h2>
        <p>Stock: {{ product.stock }}</p>
        <p>Price: Rp. {{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <p class="product-detail">{{ product.detail }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'ProductEdit', params: { id: product.id } }"><button class="btn btn-success">Edit</button></router-link>
    <button class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import axios from '../API/axios'

export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    axios({
      method: 'GET',
      url: `/products/${this.$route.params.id}`,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(response => {
        this.product = response.data
      })
      .catch(err => {
        console.log(err.response.data.error)
      })
  }
}
</script>

<style scoped>
  /* .image-container{
    background-color:yellow;
  } */

  .product-detail {
    font-weight: bold;
  }

  button{
    margin: 30px 10px;
    width: 25%
  }
</style>
