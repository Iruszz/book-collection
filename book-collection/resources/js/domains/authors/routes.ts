import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

export const authorRoutes =  [
    { path: '/author', component: Overview, name: 'author.overview' },
    { path: '/create', component: Create, name: 'author.create' },
    { path: '/author/:id/edit', component: Edit, name: 'author.edit' },
];