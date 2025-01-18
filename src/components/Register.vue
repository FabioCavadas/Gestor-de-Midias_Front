<template>
    <div class="register-form">
      <h2>Registrar</h2>
      <input type="text" v-model="username" placeholder="Nome de Usuário" />
      <input type="email" v-model="email" placeholder="E-mail" />
      <input type="password" v-model="password" placeholder="Senha" />
      <button @click="register">Registrar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {        
        console.log('Registrando usuário:', this.username, this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .register-form {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  </style>
  