<template>
    <div>
        <h2>Edit Book</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup>
import { storeModuleFactory } from '../../../services/store';
import { onMounted, watch, computed} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';

const route = useRoute();
const router = useRouter();

const bookStore = storeModuleFactory('books');

const bookId = Number(route.params.id);

const book = bookStore.getters.getById(bookId);

console.log(typeof bookStore.getters.getById);

onMounted(async () => {
  await bookStore.actions.getAll();
});

const updateBook = async (id, data) => {
    await bookStore.actions.update(id, data);
    // code...
};

const handleSubmit = async (data) => {
    await updateBook(route.params.id, data);
    router.push({ name: 'books.overview' });
};

</script>