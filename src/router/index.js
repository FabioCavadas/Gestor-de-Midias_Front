import Vue from 'vue';
import VueRouter from 'vue-router'
import MediaGallery from '@/components/MediaGallery.vue';
import Login from '@/views/Login.vue';  
import Register from '@/views/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name:'midias',component: MediaGallery },
  { path: '/login/', name: 'login', component: Login},
  { path: '/register/', name: 'register', component: Register }
];

const router = new VueRouter({
  routes
});

export default router;