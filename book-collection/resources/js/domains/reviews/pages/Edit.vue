<script setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { reviewStore } from '..';

const route = useRoute();
const router = useRouter();

const title = "Edit review"
const description = "Here you can edit the review"

const reviewId = Number(route.params.id);

reviewStore.actions.getAll();

const review = reviewStore.getters.getById(reviewId);

const handleSubmit = async (updatedReview) => {
    await reviewStore.actions.update(reviewId, updatedReview);
    router.push({ name: 'books.show', params: { id: updatedReview.book_id }})
};

const cancel = (review) => {
    router.push({ name: 'books.show', params: { id: review.book_id }})
};

</script>

<template>
    <div>
        <Form v-if="review" :review="review" @cancel="cancel" @submit="handleSubmit" :title="title" :description="description" />
    </div>
</template>