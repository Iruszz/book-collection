<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { authorStore } from '..';


const route = useRoute();
const router = useRouter();

const title = "Edit author"
const description = "Here you can edit the author"

const authorId = Number(route.params.id);
authorStore.actions.getAll();
const author = authorStore.getters.getById(authorId);

const handleSubmit = async (data) => {
    await authorStore.actions.update(route.params.id, data);
    router.push({ name: 'author.overview' });
};
</script>

<template>
    <div>
        <Form v-if="author" @submit="handleSubmit" :author="author" :title="title" :description="description" />
    </div>
</template>