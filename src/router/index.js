import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Entregas from '@/views/Entregas.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/entregas',
    name: 'Entregas',
    component: Entregas
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
