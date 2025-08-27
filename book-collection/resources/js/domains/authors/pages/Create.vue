<script setup>
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { storeModuleFactory } from '../../../services/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { authorStore } from '..';

const router = useRouter();

const title = "Create author"
const description = "Here you can create the author"

const author = ref({
    name: '',
});

const handleSubmit = async (item) => {
    await authorStore.actions.create(item);
    router.push({name: 'author.overview'});
};
</script>

<template>
    <div>
        <Form :author="author" @submit="handleSubmit" :title="title" :description="description" />
    </div>
</template>