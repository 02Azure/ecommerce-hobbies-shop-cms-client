<template>
  <header>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <h1 class="navbar-brand">Lilynano Hobbies Shop</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page">Home</router-link>
        <router-link :to="{ name: 'Add' }" class="nav-link">Add</router-link>
      </div>
      <button @click="logout()" id="logout-button" class="btn btn-outline-danger">Logout</button>
    </div>

  </div>
</nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
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
  }
</style>
