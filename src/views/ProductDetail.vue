<template>
  <div id="product-detail-page" class="page">
    <div class="row">
      <img class="image-container offset-1 col-10 offset-lg-1 col-lg-4" :src="product.image_url" onerror="this.src = 'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg'" alt="product's image">
      <div class="detail-container offset-1 col-10 offset-lg-1 col-lg-5">
        <h2>{{ product.name }}</h2>
        <p>Stock: {{ product.stock }}</p>
        <p>Price: Rp. {{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <p class="product-detail">{{ product.detail }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'ProductEdit', params: { id: this.$route.params.id } }"><button class="btn btn-success">Edit</button></router-link>
    <button @click="deleteProduct()" class="btn btn-danger">Delete</button>
    <router-link :to="{ name: 'Home' }"><button class="btn btn-primary">Cancel</button></router-link>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getOneProduct')
  },

  computed: {
    product () {
      return this.$store.state.productDetail
    }
  },

  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct')
    }
  }
}
</script>

<style scoped>
  img {
    object-fit: contain;
    max-height: 300px;
    margin-bottom: 20px;
  }
  .product-detail {
    font-weight: bold;
  }

  button{
    margin: 30px 10px;
    width: 25%
  }
</style>
