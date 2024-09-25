import { createRouter, createWebHistory } from 'vue-router';
import FundList from '../components/FundList.vue';
import FundDetail from '../components/FundDetails.vue';
import Portfolio from '@/components/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'FundList',
    component: FundList,
  },
  {
    path: '/fund/:id',
    name: 'FundDetail',
    component: FundDetail,
  },
  {
    path: '/my-portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
