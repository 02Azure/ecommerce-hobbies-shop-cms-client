<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },

  data () {
    return {
      products: []
    }
  },

  methods: {

  }

}
</script>

<style>
#app {
  text-align: center;
}

.page {
  margin-top: 2em;
}
</style>
