import { createRouter, createWebHistory } from 'vue-router';
import { bookRoutes } from '../domains/books/routes';
import { authorRoutes } from '../domains/authors/routes';
import { reviewRoutes } from '../domains/reviews/routes';

export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', redirect: '/books' }, ...bookRoutes, ...authorRoutes, ...reviewRoutes],
    linkActiveClass: "bg-gray-950/50 text-white",
    linkExactActiveClass: "bg-gray-950/50 text-white"
});