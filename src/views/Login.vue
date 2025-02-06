<template>
    <div class="login-form">
      <h2>Login</h2>
      <input type="text" v-model="username" placeholder="Usuário" />
      <input type="password" v-model="password" placeholder="Senha" />
      <button @click="login">Entrar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {                
      }
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
</style>
  