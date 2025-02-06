<template>
    <div class="login-form">
      <h2>Login</h2>
      <input type="text" v-model="username" placeholder="Usuário" />
      <input type="password" v-model="password" placeholder="Senha" />
      <button @click="login">Entrar</button>
    </div>
</template>
  
<script>
import api from "../services/api";

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
      try {
        const response = await api.post('/user/login/', {
          username: this.username,
          password: this.password,
        });        
        localStorage.setItem('token', response.data.access);   
        this.$router.push('/');        
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Usuário ou senha inválidas!');
      }
    },
  }
};
</script>
  
<style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 400px;
    margin: auto; 
    margin-top: 3rem;    
  }

  input {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: rgb(0, 89, 255);
  box-shadow: 0 0 5px rgb(0, 89, 255);
}

button {
  padding: 14px;
  background-color: rgb(0, 89, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(0, 89, 255);
}

</style>
  