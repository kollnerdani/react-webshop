import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from "./root_reducer";

const middleWares = [logger]

const persistConfig = {
    key:'root',
    storage: storage,
    blacklist: ['user']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)


const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)