<template>
    <div>
        <h2>Add new Author</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { storeModuleFactory } from '../../../services/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { authorStore } from '..';

const router = useRouter();

const author = ref({
    name: '',
});

const handleSubmit = async (item) => {
    await authorStore.actions.create(item);
    router.push({name: 'author.overview'});
};
</script>