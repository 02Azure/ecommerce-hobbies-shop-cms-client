<template>
  <div id="edit-page" class="page">
    <h2>Edit Product</h2>
    <Form
      :product = "product"
      :returnTo = "'detail'"
      @confirmAction = "edit"
    />
  </div>
</template>

<script>
import Form from '../components/Form'

export default {
  name: 'Edit',
  created () {
    this.$store.dispatch('getOneProduct')
  },

  components: { Form },

  computed: {
    product () {
      return this.$store.state.productDetail
    }
  },

  methods: {
    edit (input) {
      this.$store.dispatch('editProduct', input)
    }
  }
}
</script>

<style>

</style>
