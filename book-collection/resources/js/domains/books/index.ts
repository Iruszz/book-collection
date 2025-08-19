import {storeModuleFactory} from '../../services/store';
import { computed } from 'vue';

export const PROJECT_DOMAIN_NAME = 'books';

export const baseProjectStore = storeModuleFactory(PROJECT_DOMAIN_NAME);

export const bookStore = {
    getters:  {
        ...baseProjectStore.getters,
        getReviews: (bookId: number) => {
            const { reviewStore } = await import('../reviews');
            return computed(() =>
                Object.values(reviewStore.getters.all.value).filter(
                (review: any) => review.book_id === bookId
                )
            );
        },
    },
    setters: baseProjectStore.setters,
    actions: {
        ...baseProjectStore.actions
    },
};