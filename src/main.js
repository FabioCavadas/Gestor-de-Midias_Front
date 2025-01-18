import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

// Definir as rotas para Login e Register
const routes = [
  { path: '/', component: App },
  { path: '/login', name: 'login', component: () => import('./components/Login.vue') },
  { path: '/register', name: 'register', component: () => import('./components/Register.vue') }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
}).$mount('#app')
