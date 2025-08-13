<template>
    <div>
        <h2>Add new Book</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import Form from '../components/Form.vue';
import { storeModuleFactory } from '../../../services/store';
import { createBook } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const bookStore = storeModuleFactory('books');

const book = ref({
    title: '',
    summary: '',
    author_id: null
});

const createBook = async (item) => {
    await bookStore.actions.create(item);
};

const handleSubmit = async (data) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};
</script>