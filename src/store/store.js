import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./root_reducer";
import { rootSaga } from "./root_saga";

const sagaMiddleware = createSagaMiddleware()

const middleWares = [process.env.NODE_ENV !== 'production' &&  logger, sagaMiddleware].filter(Boolean)

const persistConfig = {
    key:'root',
    storage: storage,
    blacklist: ['user']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnchancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;


const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)