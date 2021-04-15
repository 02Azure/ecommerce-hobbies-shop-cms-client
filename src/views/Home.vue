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
export default {
  created () {
    this.$store.dispatch('getAllProducts')
  },

  methods: {
    toProductDetail (ProductId) {
      this.$router.push({ name: 'ProductDetail', params: { id: ProductId } })
    }
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  }

}
</script>

<style scoped>
  img {
    height: 150px;
  }

</style>
