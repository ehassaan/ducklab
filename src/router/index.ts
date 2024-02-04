// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   component: () => import('@/layouts/Default.vue')
  // },
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/layouts/ConsoleLayout.vue'),
    children: [
      {
        name: 'project',
        path: '/',
        component: () => import('@/views/ProjectView.vue'),
        // children: [
        //   {
        //     name: 'notebook',
        //     path: '/notebook/:dsName',
        //     props: true,
        //     component: () => import('@/views/QueryConsole.vue'),
        //   },
        // ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
