<template>
  <div id="app">
    <Header />
    <MediaGallery />    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MediaGallery from './components/MediaGallery.vue';

export default {
  name: 'App',
  components: {
    Header,
    MediaGallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
