import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

export const reviewRoutes =  [
    { path: '/create', component: Create, name: 'reviews.create' },
    { path: '/reviews/:id/edit', component: Edit, name: 'reviews.edit' },
];