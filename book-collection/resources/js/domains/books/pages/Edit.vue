<template>
    <div>
        <h2>Edit Book</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { bookStore } from '..';

const route = useRoute();
const router = useRouter();

const bookId = Number(route.params.id);

bookStore.actions.getAll();

const book = bookStore.getters.getById(bookId);
console.log(bookStore);

const handleSubmit = async (data) => {
    await bookStore.actions.update(route.params.id, data);
    router.push({ name: 'books.overview' });
};

</script>