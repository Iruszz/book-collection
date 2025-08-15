<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input v-model="form.title" type="text" required />
        <FormError name="title" />

        <label>Summary:</label>
        <textarea v-model="form.summary" required></textarea>
        <FormError name="summary" />

        <label>Author:</label>
        <select v-model="form.author_id" required>
            <option v-for="author in authors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>
        <FormError name="author.name" />

        <button type="submit">Save</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { storeModuleFactory } from '../../../services/store';
import ErrorMessage from '../../../services/components/ErrorMessage.vue';
import FormError from '../../../services/components/FormError.vue';


const bookStore = storeModuleFactory('books');
bookStore.actions.getAll();
const books = bookStore.getters.all;

const authorStore = storeModuleFactory('authors');
authorStore.actions.getAll();
const authors = authorStore.getters.all;
console.log('authors, ', authors);

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>