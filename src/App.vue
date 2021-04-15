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

  created () {
    if (localStorage.access_token) {
      this.$store.commit('setLoginStatus', { status: true })
      this.$store.commit('setUsername', { username: localStorage.username })
    }
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
