<template>
  <header>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <h1 class="navbar-brand">Lilynano Hobbies Shop</h1>
    <button v-if="isLoggedIn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="isLoggedIn" class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page">Home</router-link>
        <router-link :to="{ name: 'Add' }" class="nav-link">Add</router-link>
      </div>
      <div v-if="isLoggedIn" class="navbar-nav mb-2 mb-lg-0">
        <span id="loggedInUser">{{ username }}</span>
        <button @click="logout()" id="logout-button" class="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  </div>
</nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },

  computed: {
    username () {
      return this.$store.state.username
    },

    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
  h1{
    margin: 0;
  }

  nav{
    background-color: palegoldenrod;
  }

  #logout-button{
    width: 120px;
    text-align:center;
    margin:auto;
  }

  #loggedInUser{
    margin: auto;
    padding-bottom: 0;
    padding-right: 10px;
    font-weight: bold;
  }

  @media only screen and (max-width: 990px) {
    #loggedInUser{
      padding-right:0;
      padding-bottom: 15px;
    }
  }

</style>
