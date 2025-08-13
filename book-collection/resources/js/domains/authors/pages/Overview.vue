<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const authorStore = storeModuleFactory('authors');

authorStore.actions.getAll();
const authors = authorStore.getters.all;

authorStore.setters.deleteByItem;

const deleteAuthor = (id) => {
    authorStore.actions.delete(id);
}
</script>

<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in authors" :key="author">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'author.edit', params: { id: author.id } }">Edit Author</RouterLink></td>
            <td><button @click="deleteAuthor(author.id)">Delete</button></td>
        </tr>
    </table>
</template>