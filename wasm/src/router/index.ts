// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useNotebookStore } from '@/store/notebook';

let notebookStore: any = null;

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/lab',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/layouts/ConsoleLayout.vue'),
    children: [
      {
        name: 'project',
        path: '',
        component: () => import('@/views/ProjectView.vue'),
      },
    ]
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  if (!from.path.startsWith("/lab")) return;
  if (!notebookStore) {
    notebookStore = useNotebookStore();
  }
  if (notebookStore.unsavedChanges) {
    if (window.confirm("Unsaved changes will be lost")) {
      window.onbeforeunload = null;
    }
    else return false;
  }
});

export default router;
