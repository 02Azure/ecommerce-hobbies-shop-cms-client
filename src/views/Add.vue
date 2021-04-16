<template>
  <div id="add-page" class="page">
    <h2>Add a New Product</h2>
    <Form
      :product = "product"
      :returnTo = "'home'"
      @confirmAction = "add"
    />
  </div>
</template>

<script>
import Form from '../components/Form'

export default {
  name: 'Add',
  components: { Form },
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        stock: 1,
        price: 0,
        category: 'other',
        detail: ''
      }
    }
  },

  methods: {
    add (input) {
      this.$store.dispatch('addProduct', input)
    }
  }
}
</script>

<style>

</style>
