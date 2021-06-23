import { put, takeLatest, all, takeEvery  } from 'redux-saga/effects';
function* fetchUser({payload}) {
   /* const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), );*/
    let user = payload.users.find(user => payload.credentials.email == user.email && payload.credentials.password == user.password);

    if (user) {
        yield put({ type: "USER_AUTHENTICATED", payload: user });
    } else {
        yield put({type: 'USER_AUTHENTICATION_ERROR', payload: 'Invalid credentials'})
    }
}

function* registerUser({payload}) {
    let user = payload.users.find(user => payload.user.email == user.email);

    if (user) {
        yield put({ type: "USER_REGISTRATION_ERROR", payload: "User with provided email already exist." });
    } else {
        yield put({type: 'USER_REGISTERED', payload: {user: payload.user, message: 'User registered successfully. Now use these credentials to login'}})
    }
}

function* actionWatcher() {
    yield takeLatest('AUTHENTICATING_USER', fetchUser);
    yield takeLatest('REGISTERING_USER', registerUser);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
