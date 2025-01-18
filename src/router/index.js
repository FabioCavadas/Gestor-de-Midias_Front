import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Definir as rotas para Login e Register
const routes = [
  { path: '/', component: App },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
  { path: '/register', name: 'register', component: () => import('./views/Register.vue') }
];

const router = new VueRouter({
  routes
});
