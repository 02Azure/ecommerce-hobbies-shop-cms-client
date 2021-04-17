<template>
  <div id="app">
    <Navbar />
    <div class="modal" tabindex="-1">
    <router-view/>
</div>

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
  margin-top: 5em;
  padding: 2em;
  background-color: ivory;
}
</style>
