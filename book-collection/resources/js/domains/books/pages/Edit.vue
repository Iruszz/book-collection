<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { bookStore } from '..';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const title = "Edit book"
const description = "Here you can edit the book"

const bookId = Number(route.params.id);
bookStore.actions.getAll();
const book = bookStore.getters.getById(bookId);

const authorStore = storeModuleFactory('authors');
authorStore.actions.getAll();

const handleSubmit = async (data) => {
    await bookStore.actions.update(route.params.id, data);
    router.push({ name: 'books.overview' });
};

</script>

<template>
    <div>
        <Form v-if="book" @submit="handleSubmit" :book="book" :title="title" :description="description" />
    </div>
</template>