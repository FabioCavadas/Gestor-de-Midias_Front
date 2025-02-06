<template>
    <header class="app-header">
      <img src="../assets/logo.png" alt="Logo Gestor de Mídias" />     
      <h1>Gestor de Mídias</h1>
      <div class="auth">
        <button v-if="$route.name !== 'login' && $route.name !== 'register'" @click="goToRegister">Registrar</button>
        <button v-if="$route.name !== 'register' && $route.name !== 'login'" @click="goToLogin">Login</button>
        <button v-if="$route.name !== 'login'" @click="logout">Sair</button>        
      </div>      
    </header>
  </template>

<script>  
export default {  
    methods: {
      goToRegister() {        
        this.$router.push({ name: 'register' });   
      },          
      goToLogin() {   
        this.$router.push({ name: 'login' });     
      },      
      logout() {        
        localStorage.removeItem('token');
        localStorage.removeItem('refreshtoken');
        
        this.$router.push('login');
      }
    }
  };
</script>
  
<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;    
    background-color: #fff;  
    border-bottom: 3px solid #ccc;         
  }

img {
  height: 40px;  
}

button {  
  padding: 0.5rem 1rem;
  background-color: #4CAF50;  
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #4CAF50;  
}

.auth{
  display: flex;
  gap: 5px;
}

</style>