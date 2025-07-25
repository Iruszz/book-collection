<script setup>
import { fetchBooks, getAllBooks, deleteBook } from '../store';

fetchBooks();

</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Edit Book</RouterLink></td>
            <td><button @click="deleteBook(book.id)">Delete</button></td>
        </tr>
    </table>
</template>