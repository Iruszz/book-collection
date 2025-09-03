<script setup>
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

function myFunction(bookId) {
  if (confirm("The book is being deleted together with the reviews")) {
    deleteBook(bookId)
  } else{}
}
</script>

<template>

  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
      <div v-for="book in books" :key="book">
        <div class="group relative">
            <img :src="`/assets/book-2-svgrepo-com.svg`" alt="book" class="dark:hidden aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <img :src="`/assets/book-2-svgrepo-com-dark.svg`" alt="book dark" class="hidden dark:block aspect-square w-full rounded-md bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />

            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <RouterLink :to="{ name: 'books.show', params: { id: book.id } }">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                        </RouterLink>
                        {{ book.title }}
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">$14,45</p>
            </div>
        </div>
        <div class="mt-4 flex justify-between">
            <RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Edit Book</RouterLink>
            <button @click="myFunction(book.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>




</template>