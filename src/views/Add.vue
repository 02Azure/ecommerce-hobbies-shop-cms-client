<template>
  <div id="add-page" class="page">
    <h2>Add a New Product</h2>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>

      <div class="form-group">
        <label for="image_url">Image URL</label>
        <input type="text" class="form-control" id="image_url" v-model="product.image_url">
      </div>

      <div class="form-group">
        <label for="stock">Stock</label>
        <input type="number" class="form-control" id="stock" v-model="product.stock">
      </div>

      <div class="form-group">
        <label for="price-add">Price</label>
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

      <button type="submit" class="btn btn-success">Add</button>
      <router-link :to="{ name: 'Home' }"><button class="btn btn-danger">Cancel</button></router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        stock: 1,
        price: 0,
        category: 'single',
        detail: ''
      }
    }
  },

  methods: {
    add () {
      this.$store.dispatch('addProduct', { product: this.product })
    }
  }
}
</script>

<style>

</style>
