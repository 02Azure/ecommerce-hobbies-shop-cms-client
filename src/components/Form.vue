<template>
  <form @submit.prevent="confirmAction()">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model="product.name" required>
    </div>

    <div class="form-group">
      <label for="image_url">Image URL</label>
      <input type="url" class="form-control" id="image_url" v-model="product.image_url">
    </div>

    <div class="form-group">
      <label for="stock">Stock</label>
      <input type="number" class="form-control" id="stock" v-model="product.stock" min="0">
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price" v-model="product.price" min="0">
    </div>

    <select class="form-select form-select-lg mb-3" v-model="product.category">
      <option value="single">Single</option>
      <option value="sealed product">Sealed Product</option>
      <option value="accessory">Accessory</option>
      <option value="figure">Figurine/Model Kit</option>
      <option value="other">Other</option>
    </select>

    <div class="form-group">
      <label for="detail">Detail</label>
      <textarea class="form-control" id="detail" rows="3" v-model="product.detail"></textarea>
    </div>

    <button type="submit" class="btn btn-success">Confirm</button>
    <router-link v-if="returnTo === 'detail'" :to="{ name: 'ProductDetail', params: { id: this.$route.params.id } }"><button class="btn btn-danger">Cancel</button></router-link>
    <router-link v-if="returnTo === 'home'" :to="{ name: 'Home' }"><button class="btn btn-danger">Cancel</button></router-link>
  </form>
</template>

<script>
export default {
  name: 'Form',

  props: ['product', 'returnTo'],

  methods: {
    confirmAction () {
      this.$emit('confirmAction', {
        product: {
          name: this.product.name,
          image_url: this.product.image_url,
          stock: this.product.stock,
          price: this.product.price,
          category: this.product.category,
          detail: this.product.detail
        }
      })
    }
  }
}
</script>

<style scoped>
  input, select, textarea {
    margin: auto;
    width: 50vw;
    min-width: 350px
  }

  .form-group, .form-select {
    margin-bottom: 1.5em;
  }

  button {
    min-width: 165px;
    width: 25%;
    margin: 1.5em 1em
  }
</style>
