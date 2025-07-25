<script setup>
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
fetchAuthors();
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