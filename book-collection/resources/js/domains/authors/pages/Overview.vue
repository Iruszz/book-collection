<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import ErrorMessage from '../../../services/components/ErrorMessage.vue';
import { authorStore } from '..';

const route = useRoute();
const router = useRouter();

authorStore.actions.getAll();
const authors = authorStore.getters.all;

authorStore.setters.deleteByItem;

const deleteAuthor = (id) => {
    authorStore.actions.delete(id);
}
</script>

<template>

    <ErrorMessage />
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