<script setup>
// import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
import { authorStore } from './../index';
// fetchAuthors();

// const authorStore = baseProjectStore('authors');

authorStore.actions.getAll();

const authors = authorStore.getters.all;
</script>

<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'author.edit', params: { id: author.id } }">Edit Book</RouterLink></td>
            <td><button @click="deleteAuthor(author.id)">Delete</button></td>
        </tr>
    </table>
</template>