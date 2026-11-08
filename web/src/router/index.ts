import { createRouter, createWebHistory } from 'vue-router'
import ClubListView from '../views/ClubListView.vue'
import ClubDetailView from '../views/ClubDetailView.vue'
import MyPaymentsView from '../views/MyPaymentsView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/clubs' },
    { path: '/clubs', name: 'clubs', component: ClubListView },
    { path: '/clubs/:id', name: 'club-detail', component: ClubDetailView },
    { path: '/my-payments', name: 'my-payments', component: MyPaymentsView },
    { path: '/login', name: 'login', component: LoginView },
  ],
})

export default router
