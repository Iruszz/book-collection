import {storeModuleFactory} from '../../services/store';
import { computed } from 'vue';

export const PROJECT_DOMAIN_NAME = 'reviews';

export const baseProjectStore = storeModuleFactory(PROJECT_DOMAIN_NAME);

export const reviewStore = {
    getters:  {
        ...baseProjectStore.getters,
        getReviews: (bookId: number) =>
            computed(() =>
                Object.values(baseProjectStore.getters.all.value).filter(
                    (review: any) => review.book_id === bookId)
            ),
    },
    setters: baseProjectStore.setters,
    actions: {
        ...baseProjectStore.actions
    },
};