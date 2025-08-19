<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import { bookStore } from '..';
import { reviewStore } from '../../reviews';

const route = useRoute();
// const router = useRouter();

const bookId = Number(route.params.id);
bookStore.actions.getAll();
const book = bookStore.getters.getById(bookId);

reviewStore.actions.getAll();
const reviews = await bookStore.getters.getReviews(bookId);

// const reviewStore = storeModuleFactory('reviews');
// const reviewId = Number(route.params.id);
// reviewStore.actions.getAll();
// const review = reviewStore.getters.getById(reviewId);

// bookStore.setters.deleteByItem;

// const deleteBook = (id) => {
//     bookStore.actions.delete(id);
// }

</script>

<template>
    <table v-if="book">
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr>
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td>{{ reviews }}</td>
            <!-- <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Edit Book</RouterLink></td>
            <td><button @click="deleteBook(book.id)">Delete</button></td> -->
        </tr>
    </table>

        <!-- <tr v-for="book in books" :key="book">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
        </tr> -->
</template>