import {storeModuleFactory} from '../../services/store';
import { computed } from 'vue';

export const PROJECT_DOMAIN_NAME = 'reviews';

export const baseProjectStore = storeModuleFactory(PROJECT_DOMAIN_NAME);

export const reviewStore = {
    getters:  {
        ...baseProjectStore.getters,
        getReviews: async (bookId: number) => {
            const reviewId = (book_id: number) => computed(() => baseProjectStore.getters.all.value.[book_id])
            baseProjectStore.getters.all.value.filter((reviewId) => bookId === reviewId);
        },
    },
    setters: baseProjectStore.setters,
    actions: {
        ...baseProjectStore.actions
    },
};