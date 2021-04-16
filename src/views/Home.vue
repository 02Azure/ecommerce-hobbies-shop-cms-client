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
        <ProductRow
          v-for="product in products"
          :key="product.id"
          :product = "product"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductRow from '../components/ProductRow'

export default {
  name: 'Home',
  components: { ProductRow },
  created () {
    this.$store.dispatch('getAllProducts')
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
