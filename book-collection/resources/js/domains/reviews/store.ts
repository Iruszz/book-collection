import axios from 'axios';
import { ref, computed } from 'vue';
import { getRequest } from '../../services/http/index';

// state
const reviews = ref([]);

// getters
export const getAllReviews = computed(() => reviews.value);

// actions
export const fetchReviews = async () => {
    const {data} = await getRequest('/reviews');
    if(!data) return;
    reviews.value = data;
};

export const createReview = async (newReview) => {
    const {data} = await axios.post('/api/reviews', newReview);
    if(!data) return
    reviews.value = data;
};

export const getReviewById = (id) => computed(() => reviews.value.find(review => review.id == id));

export const updateReview = async (id, updatedReview) => {
    const { data } = await axios.put(`/api/reviews/${id}`, updatedReview);
    if (!data) return;
    reviews.value = data;
};

export const deleteReview = async (id) => {
    await axios.delete(`/api/reviews/${id}`);
    reviews.value = reviews.value.filter(review => review.id !== id);
};