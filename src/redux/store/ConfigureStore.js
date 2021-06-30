import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import UserReducer from "../reducers/UserReducer";
import ProgramsReducer from "../reducers/ProgramsReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '.././sagas';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import PaymentReducer from "../reducers/PaymentReducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}

export default () => {
    const persistedReducer = persistReducer(persistConfig, combineReducers({
        users: UserReducer,
        programs: ProgramsReducer,
        payments: PaymentReducer
    }));

    let store = createStore(persistedReducer,
        storeEnhancers(applyMiddleware(sagaMiddleware))
        );

    sagaMiddleware.run(rootSaga);

    return store;
};
