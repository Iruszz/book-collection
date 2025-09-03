<script setup>
import { useRoute, useRouter } from 'vue-router';
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
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Author name
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in authors" :key="author"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ author.name }}
                </th>
                <td>
                    <RouterLink :to="{ name: 'author.edit', params: { id: author.id } }">
                        Edit
                    </RouterLink>
                </td>
                <td class="px-6 py-4">
                    <button @click="deleteAuthor(author.id)">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>