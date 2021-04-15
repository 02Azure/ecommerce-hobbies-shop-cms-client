<template>
  <div id="edit-page" class="page">
    <h2>Edit Product</h2>
    <form @submit.prevent="edit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>

            <div class="form-group">
        <label for="image_url">Name</label>
        <input type="text" class="form-control" id="image_url" v-model="product.image_url">
      </div>

      <div class="form-group">
        <label for="stock">Stock</label>
        <input type="number" class="form-control" id="stock" v-model="product.stock">
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" v-model="product.price">
      </div>

      <select class="form-select form-select-lg mb-3" v-model="product.category">
        <option value="single">Single</option>
        <option value="sealed product">Sealed Product</option>
        <option value="accessory">Accessory</option>
      </select>

      <div class="form-group">
        <label for="detail">Detail</label>
        <textarea class="form-control" id="detail" rows="3" v-model="product.detail"></textarea>
      </div>

      <button type="submit" class="btn btn-success">Edit</button>
      <router-link :to="{ name: 'ProductDetail', params: { id: this.$route.params.id } }"><button class="btn btn-danger">Cancel</button></router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  created () {
    this.$store.dispatch('getOneProduct')
  },

  computed: {
    product () { // !!changing directly vuex store!! diganti nanti kalau ketemu solusi alternatif
      return this.$store.state.productDetail
    }
  },

  methods: {
    edit () {
      this.$store.dispatch('editProduct', { product: this.$store.state.productDetail })
    }
  }
}
</script>

<style>

</style>
