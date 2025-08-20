import {storeModuleFactory} from '../../services/store';
import { computed } from 'vue';

export const PROJECT_DOMAIN_NAME = 'books';

export const baseProjectStore = storeModuleFactory(PROJECT_DOMAIN_NAME);

export const bookStore = {
    getters:  {
        ...baseProjectStore.getters,
    },
    setters: baseProjectStore.setters,
    actions: {
        ...baseProjectStore.actions
    },
};