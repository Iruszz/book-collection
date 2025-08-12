<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const bookStore = storeModuleFactory('books');

bookStore.actions.getAll();
const books = bookStore.getters.all;

// 
const bookId = Number(route.params.id);
console.log('bookId, ', bookId);
const id = bookStore.getters.getById(bookId);

bookStore.setters.deleteByItem;
const deleteBook = bookStore.actions.delete(id);
console.log('deleteBook, ', deleteBook);
</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in books" :key="book">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: bookId } }">Edit Book</RouterLink></td>
            <!--  -->
            <td><button @click="deleteBook">Delete</button></td>
        </tr>
    </table>
</template>