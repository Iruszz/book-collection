<script setup>
import Form from '../components/Form.vue';
import { storeModuleFactory } from '../../../services/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { bookStore } from '..';

const router = useRouter();

const title = "Create book"
const description = "Here you can create the book"

const book = ref({
    title: '',
    summary: '',
    author_id: null
});

const handleSubmit = async (item) => {
    await bookStore.actions.create(item);
    router.push({name: 'books.overview'});
};
</script>

<template>
    <div>
        <Form :book="book" @submit="handleSubmit" :title="title" :description="description" />
    </div>
</template>