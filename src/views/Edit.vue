<template>
  <div id="edit-page" class="page">
    <h2>Edit Product</h2>
    <form>
      <div class="form-group">
        <label for="name-edit">Name</label>
        <input type="text" class="form-control" id="name-edit" v-model="product.name">
      </div>

      <div class="form-group">
        <label for="stock-edit">Stock</label>
        <input type="number" class="form-control" id="stock-edit" v-model="product.stock">
      </div>

      <div class="form-group">
        <label for="price-edit">Price</label>
        <input type="number" class="form-control" id="price-edit" v-model="product.price">
      </div>

      <select class="form-select form-select-lg mb-3" v-model="product.category">
        <option value="single">Single</option>
        <option value="sealed product">Sealed Product</option>
        <option value="accessory">Accessory</option>
      </select>

      <div class="form-group">
        <label for="detail-edit">Detail</label>
        <textarea class="form-control" id="detail-edit" rows="3" v-model="product.detail"></textarea>
      </div>

      <button type="submit" class="btn btn-success">Edit</button>
      <button class="btn btn-danger">Cancel</button>
    </form>
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

<style>

</style>
