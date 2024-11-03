// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import ProjectView from "@/views/ProjectView.vue";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/lab',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: import('@/layouts/ConsoleLayout.vue'),
    component: () => import(/* webpackChunkName: "lab" */ '@/layouts/ConsoleLayout.vue'),
    children: [
      {
        name: 'project',
        path: '',
        component: ProjectView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
