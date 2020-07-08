import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import mySaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {

    const Store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(mySaga);
    return Store;
}

export default createAppStore;
