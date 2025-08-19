<template>
    <div>
        <h2>Edit Author</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { authorStore } from '..';


const route = useRoute();
const router = useRouter();

const authorId = Number(route.params.id);

authorStore.actions.getAll();

const author = authorStore.getters.getById(authorId);

const handleSubmit = async (data) => {
    await authorStore.actions.update(route.params.id, data);
    router.push({ name: 'author.overview' });
};
</script>