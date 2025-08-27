<script setup>
import Form from '../components/Form.vue';
import { storeModuleFactory } from '../../../services/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { reviewStore } from '..';

const router = useRouter();

const title = "Create review"
const description = "Here you can create the review"

const review = ref({
    title: '',
    summary: '',
    review_id: null
});

const handleSubmit = async (item) => {
    await reviewStore.actions.create(item);
    router.push({name: 'reviews.overview'});
};
</script>

<template>
    <div>
        <Form :review="review" @submit="handleSubmit" :title="title" :description="description" />
    </div>
</template>