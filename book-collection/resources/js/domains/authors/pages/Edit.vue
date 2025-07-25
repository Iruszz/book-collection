<template>
    <div>
        <h2>Edit Author</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchAuthors, getAuthorById, updateAuthor } from '../store';

const route = useRoute();
const router = useRouter();

fetchAuthors();

const author = getAuthorById(route.params.id);

const handleSubmit = async (data) => {
    console.log('data', data);
    await updateAuthor(route.params.id, data);
    router.push({ name: 'author.overview' }).catch((err) => {
        throw new Error(`Problem handling something: ${err}.`);
    });
};
</script>