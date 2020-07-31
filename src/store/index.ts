import { createStore } from 'redux';
import reducers, {initialState} from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const config = {
    key:  'react',
    storage: storageSession
}

const perReducer = persistReducer(config, reducers);
const store = createStore(
    perReducer,
    initialState
);

export const persistor = persistStore(store);

export default store;

// export default createStore(reducers, initialState);