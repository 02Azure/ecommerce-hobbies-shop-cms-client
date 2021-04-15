<template>
  <div class="container page" id="login-page">
    <h2>Content Management System</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="loginusername">Username</label>
        <input v-model="username" type="text" class="form-control" id="loginusername" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="loginpassword">Password</label>
        <input v-model="password" type="password" class="form-control" id="loginpassword">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <a href="#">Shop site</a>
  </div>
</template>

<script>
import axios from '../API/axios'

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
      axios({
        method: 'POST',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => {
          localStorage.setItem('username', response.data.username)
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    }
  }
}
</script>

<style scoped>
  #login-page{
    margin-top: 50px;
  }

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
    margin-top: 1em;
  }
</style>
