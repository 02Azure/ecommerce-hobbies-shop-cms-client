<template>
  <div class="container page" id="login-page">
    <h2>Content Management System</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="loginusername">Username</label>
        <input v-model="username" type="text" class="form-control" id="loginusername" required>
      </div>
      <div class="form-group">
        <label for="loginpassword">Password</label>
        <input v-model="password" type="password" class="form-control" id="loginpassword" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <a href="#">Shop site</a>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { username: this.username, password: this.password })
    }
  }
}
</script>

<style scoped>
  h2{
    margin-bottom: 20px;
  }

  form input {
    margin: auto;
    width: 50%;
  }

  .form-group {
    margin: 1.5em 0;
  }

  button{
    width: 50%;
    margin-top: 1em;
  }
</style>
