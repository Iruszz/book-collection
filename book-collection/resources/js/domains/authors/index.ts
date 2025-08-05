import {storeModuleFactory} from '../../services/store';

export const PROJECT_DOMAIN_NAME = 'authors';

export const baseProjectStore = storeModuleFactory(PROJECT_DOMAIN_NAME);

export const authorStore = {
    getters: baseProjectStore.getters,
    setters: baseProjectStore.setters,
    actions: {
        ...baseProjectStore.actions
    },
};