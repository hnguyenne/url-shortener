import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    { path: "/", component: Home },
    {
        path: '/:shortenId',
        name: 'Redirect',
        beforeEnter: (to) => {
            // Redirect to the backend endpoint
            const shortenId = to.params.shortenId;
            window.location.href = `http://localhost:5000/api/url/${shortenId}`;
        },
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
