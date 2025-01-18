<template>
    <header class="app-header">
      <img src="../assets/logo.png" alt="Logo Gestor de Mídias" />     
      <h1>Gestor de Mídias</h1>
      <button @click="goToRegister">Registrar</button>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      goToRegister() {
        this.$router.push({ name: 'api/user/register' });  
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
  background-color: #45a049;  
}  

</style>