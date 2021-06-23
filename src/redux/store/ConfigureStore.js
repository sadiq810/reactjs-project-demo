import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import UserReducer from "../reducers/UserReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '.././sagas';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export default () => {
    let store = createStore(combineReducers({
        users: UserReducer
    }),
        storeEnhancers(applyMiddleware(sagaMiddleware))
        );

    sagaMiddleware.run(rootSaga);

    return store;
};
