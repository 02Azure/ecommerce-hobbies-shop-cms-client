<template>
  <tr @click="toProductDetail(product.id)">
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" onerror="this.src = 'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg'" alt="product's image"></td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ product.category }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  props: ['product'],
  methods: {
    toProductDetail (ProductId) {
      this.$router.push({ name: 'ProductDetail', params: { id: ProductId } })
    }
  },
  computed: {
    image () {
      return this.product.image || 'https://via.placeholder.com/300?text=Product'
    }
  }
}
</script>

<style scoped>
  tr:hover {
    cursor: pointer;
  }
  img {
    max-height: 150px;
  }
</style>
