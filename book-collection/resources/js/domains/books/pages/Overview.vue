<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import { bookStore } from '..';


const route = useRoute();
const router = useRouter();

bookStore.actions.getAll();
const books = bookStore.getters.all;

bookStore.setters.deleteByItem;

const deleteBook = (id) => {
    bookStore.actions.delete(id);
}

</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in books" :key="book">
            <RouterLink :to="{ name: 'books.show', params: { id: book.id } }">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
            </RouterLink>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Edit Book</RouterLink></td>
            <!--  -->
            <td><button @click="deleteBook(book.id)">Delete</button></td>
        </tr>
    </table>
</template>