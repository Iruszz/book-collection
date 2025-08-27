<script setup>
import { storeModuleFactory } from '../../../services/store';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { reviewStore } from '..';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const title = "Edit review"
const description = "Here you can edit the review"

const reviewId = Number(route.params.id);

reviewStore.actions.getAll();

const review = reviewStore.getters.getById(reviewId);
console.log(reviewStore);

const handleSubmit = async (data) => {
    await reviewStore.actions.update(route.params.id, data);
    router.push({ name: 'reviews.overview' });
};

</script>

<template>
    <div>
        <Form v-if="review" :review="review" @submit="handleSubmit" :title="title" :description="description" />
    </div>
</template>