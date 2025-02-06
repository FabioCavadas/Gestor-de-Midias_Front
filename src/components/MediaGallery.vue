<template>
  <div class="gallery">
    <div class="filters">
      <input
        type="text"
        v-model="searchName"
        placeholder="Pesquisar por nome"
        @input="filterMedia"
      />
      <select v-model="selectedCategory" @change="filterMedia">
        <option value="">Categorias</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <select v-model="selectedType" @change="filterMedia">
        <option value="">Tipos</option>
        <option value="image">Imagem</option>
        <option value="video">Vídeo</option>
      </select>
    </div>

    <div class="media-list">
      <div v-for="item in filteredMedia" :key="item.id" class="media-item">
        <a :href="item.media" target="_blank">
          
          <div v-if="item.media_type === 'image'">          
            <img 
              :src="item.media"  
              :alt="item.name"
              style="max-width: 100%; max-height: auto;"  
            />       
          </div>
          
          <div v-if="item.media_type === 'video' && isAuthenticated">          
            <video 
              :src="item.media"  
              controls
              style="max-width: 100%; max-height: auto;">
              Seu navegador não suporta a tag de vídeo.
            </video>            
          </div>
        </a>  
        <h3>{{ item.name }}</h3>                         
      </div>
    </div>    

    <div v-if="loading">Carregando...</div>

    <div v-if="error">{{ error }}</div>

    <div v-if="filteredMedia.length === 0 && !loading">
      Nenhuma mídia encontrada
    </div>

    <div v-if="selectedType === 'video' && !isAuthenticated" class="login-prompt">
      <b>Você não possui permissão para acessar vídeos, necessário registrar-se e efetuar login.</b>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      medias: [],
      filteredMedia: [],
      searchName: "",
      selectedCategory: "",
      selectedType: "",
      loading: true,
      error: null,
      categories: [],
      isAuthenticated: false,  
    };
  },
  created() {
    this.checkAuthentication();
    this.fetchMedias();      
  },
  methods: {    
    checkAuthentication() {
      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token;  
    },    
    async fetchMedias() {
      try {
        const response = await api.get("/midias");
        this.medias = response.data;
        this.categories = [
          ...new Set(response.data.map((item) => item.category_name)),
        ];

        this.filteredMedia = this.medias;
        this.loading = false; 
      } catch (error) {
        this.error = "Erro ao carregar as mídias"; 
        this.loading = false; 
      }
    },

    filterMedia() {      
      if (this.selectedType === 'video' && !this.isAuthenticated) {        
        this.filteredMedia = []; 
        return;
      }
      
      this.filteredMedia = this.medias.filter((item) => {
        const matchesName = this.searchName
          ? item.name.toLowerCase().includes(this.searchName.toLowerCase())
          : true;

        const matchesCategory = this.selectedCategory
          ? item.category_name === this.selectedCategory
          : true;
        
        const matchesType = this.selectedType
          ? item.media_type === this.selectedType
          : true;
      
          return matchesName && matchesCategory && matchesType;
        });
      }      
    },
  };
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column; 
  gap: 5px;
}

.filters {
  display: flex;
  flex-wrap: wrap; 
  margin-top: 2rem;
  margin-bottom: 20px;
  gap: 10px;
  justify-content: center; 
}

.filters input,
.filters select {
  padding: 8px;
  font-size: 16px;
  max-width: 300px; 
}

.media-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
}

.media-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 430px;  
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out; 
}

@media (max-width: 768px) {
  .media-list {
    flex-direction: column; 
  }

  .filters {
    flex-direction: column; 
    gap: 15px;
  }
}

.loading,
.error {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  color: rgb(0, 89, 255); 
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #555;
}
</style>
