<template>
    <div>
        <h2>Edit Author</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { storeModuleFactory } from '../../../services/store';
// import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';

const route = useRoute();
const router = useRouter();

const authorStore = storeModuleFactory('authors');

const authorId = Number(route.params.id);

authorStore.actions.getAll();

const author = authorStore.getters.getById(authorId);

// const updateAuthor = async (id, data) => {
//     await authorStore.actions.update(id, data);
// };

const handleSubmit = async (data) => {
    await authorStore.actions.update(route.params.id, data);
    router.push({ name: 'author.overview' });
};
</script>