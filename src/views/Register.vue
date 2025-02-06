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
import api from "../services/api";

  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''        
      };
    },
    methods: {
      async register() {
      try {      
        const response = await api.post('/user/register/', {        
          username: this.username,
          email: this.email, 
          password: this.password,            
        });

        alert('Usuário registrado com sucesso!');

        this.$router.push({ name: 'login' });
        
      } catch (error) {        
        alert('Erro ao tentar registrar o usuário!');
      }
    },
  }
};
</script>
  
<style scoped>
  .register-form {
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
  border-color: #4CAF50;
  box-shadow: 0 0 5px #4CAF50;
}

button {
  padding: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: r#45a049;
}

</style>
  