<template>
  <div class="gallery">
    <!-- Filtros -->
    <div class="filters">
      <input
        type="text"
        v-model="searchName"
        placeholder="Pesquisar por nome"
        @input="filterMedia"
      />

      <select v-model="selectedCategory" @change="filterMedia">
        <option value="">Categorias</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
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
        <img
          v-if="item.type === 'image'"
          :src="item.url"
          :alt="item.title"
          
        />
        <video
          v-if="item.type === 'video'"
          :src="item.url"
          controls
          
        ></video>
        <h3>{{ item.name }}</h3>
        <p>{{ item.media }}</p>
      </div>
    </div>

    <div v-if="loading">Carregando...</div>

    <div v-if="error">{{ error }}</div>

    <div v-if="filteredMedia.length === 0 && !loading">
      Nenhuma mídia encontrada
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../services/api";

export default {
  data() {
    return {
      images: [], // Armazenar as imagens
      filteredMedia: [], // Mídias filtradas
      searchName: "", // Nome a ser pesquisado
      selectedCategory: "", // Categoria selecionada
      selectedType: "", // Tipo selecionado (imagem ou vídeo)
      loading: true, // Indica se as imagens estão sendo carregadas
      error: null, // Armazena a mensagem de erro se houver
      categories: [], // Categorias disponíveis
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await api.get("/midias");
        this.medias = response.data;
        this.categories = [
          ...new Set(response.data.map((item) => item.category_name)),
        ];
        this.media_type = [
          ...new Set(response.data.map((item) => item.media_type)),
        ];
        this.filteredMedia = this.medias;
        this.loading = false; // Estado de carregamento
      } catch (error) {
        this.error = "Erro ao carregar as imagens"; 
        this.loading = false; 
      }
    },

    // Critérios
    filterMedia() {
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
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.filters {
  display: flex;
  margin-top: 2rem;
  margin-bottom: 20px;
  gap: 10px;
}

.filters input,
.filters select {
  padding: 8px;
  font-size: 16px;
}

.media-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.media-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 10px;
  text-align: center;
}

.media-thumbnail {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.loading,
.error {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
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
