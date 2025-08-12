<script setup>
// import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
// import { authorStore } from './../index';
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
// fetchAuthors();

// const authorStore = baseProjectStore('authors');

const route = useRoute();
const router = useRouter();

authorStore = storeModuleFactory('authors');

authorStore.actions.getAll();
const authors = authorStore.getters.all;

const authorId = Number(route.params.id);
const author = authorStore.getters.getById(authorId);
</script>

<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in authors" :key="author">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'author.edit', params: { id: author.id } }">Edit Book</RouterLink></td>
            <!--  -->
            <!-- <td><button @click="deleteAuthor(author.id)">Delete</button></td> -->
        </tr>
    </table>
</template>