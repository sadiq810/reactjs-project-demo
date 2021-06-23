import { put, takeLatest, all, takeEvery  } from 'redux-saga/effects';
import programs from "../../assets/data/programs";

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
        yield put({type: 'USER_REGISTERED', payload: {user: {...payload.user,
                middle_name: '',
                last_name: '',
                dob: '',
                first_language: '',
                country_of_citizenship: '',
                passport_no: '',
                gender: '',
                marital_status: '',
                address: '',
                city: '',
                country: '',
                state: '',
                zip_code: '',
                phone: ''}, message: 'User registered successfully. Now use these credentials to login'}})
    }
}

function* updateUserProfile({payload}) {
    yield put({type: 'USER_PROFILE_UPDATED', payload: payload})
}

function* logoutUser() {
    yield put({type: 'USER_LOGOUT', payload: undefined})
}

function* loadPrograms({payload}) {
    if (programs.length > 0) {
        yield put({type: 'PROGRAMS_LOADED', payload: programs})
    } else {
        yield put({ type: "LOADING_PROGRAMS_ERROR", payload: "Error occurred while loading programs." });
    }
}

function* applyForPrograms({payload: {program, data}}) { // data, program
    yield put({type: 'APPLIED_FOR_PROGRAM', payload: {
            id: Math.floor(Math.random()*89),
            title: program.title,
            university: program.university.title,
            estart_date: data.start_date.split(',')[0],
            start_date: data.start_date.split(',')[0],
            fee: program.tuition_fee,
            status: 'unpaid'
        }})
}

function* actionWatcher() {
    yield takeLatest('AUTHENTICATING_USER', fetchUser);
    yield takeLatest('REGISTERING_USER', registerUser);
    yield takeLatest('UPDATE_USER_PROFILE', updateUserProfile);
    yield takeLatest('LOGOUT_USER', logoutUser);

    yield takeLatest('LOADING_PROGRAMS', loadPrograms);
    yield takeLatest('APPLY_FOR_PROGRAM', applyForPrograms);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}