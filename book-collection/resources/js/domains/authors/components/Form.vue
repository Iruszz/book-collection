<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Author:</label>
        <input v-model="form.name" type="text" required />
        <FormError name="name" />
        
        <button type="submit">Save</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { storeModuleFactory } from '../../../services/store';
import ErrorMessage from '../../../services/components/ErrorMessage.vue';
import FormError from '../../../services/components/FormError.vue';

const authorStore = storeModuleFactory('authors');
authorStore.actions.getAll();

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>