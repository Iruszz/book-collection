<template>
    <form @submit.prevent="handleSubmit">
        <label>Author:</label>
        <input v-model="form.name" type="text" required />
        
        <button type="submit">Save</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';

// Fetch authors when component is mounted
fetchAuthors();


const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>