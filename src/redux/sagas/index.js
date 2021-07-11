import { put, takeLatest, all, takeEvery  } from 'redux-saga/effects';
import programs from "../../assets/data/programs";
import transactions_history from "../../assets/data/transactions_history";
import payments_history from "../../assets/data/payments_history";
import loan_application from "../../assets/data/loan_application";
import loan_application_draft from "../../assets/data/loan_application_draft";
import {getLoanTypeById} from "../selectors/LoanSelector";
import {types} from "../../assets/data/loan_details";

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

function* updateUserEducationHistory({payload}) {
    yield put({type: 'UPDATE_EDUCATION_HISTORY', payload: payload})
}

function* deleteUserEducationFromHistory({payload}) {
    yield put({type: 'DELETE_EDUCATION', payload: payload})
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

function* paymentProcessing({payload}) { // data, program
    yield put({type: 'PAYMENT_FOR_PROGRAM_DONE', payload})
}

function* loadTransactionsList({payload}) {
    let tsh = [...JSON.parse(JSON.stringify(transactions_history))];

    if (payload.apply) {
        tsh.forEach(th => {
            if (payload.method)
                th.items = th.items.filter(t => t.description == payload.method);
            if (payload.status)
                th.items = th.items.filter(t => t.action == payload.status);
            if (payload.type)
                th.items = th.items.filter(t => t.payment_type == payload.type);

        })
    }

    yield put({type: 'TRANSACTIONS_LOADING'});
    yield put({type: 'TRANSACTIONS_LOADED', payload: tsh});
}

function* loadWalletPaymentList() {
    yield put({type: 'PAYMENTS_HISTORY_LOADED', payload: payments_history});
}

function* loadLoansApplicationList() {
    yield put({type: 'LOADING_LOANS_APPLICATIONS'});
    yield put({type: 'LOANS_APPLICATIONS_LOADED', payload: loan_application});
}


function* loadLoansDraftApplicationList() {
    yield put({type: 'LOADING_LOANS_DRAFT_APPLICATIONS'});
    yield put({type: 'LOANS_DRAFT_APPLICATIONS_LOADED', payload: loan_application_draft});
}

function* submitLoanApplication({payload}) {
    let loan = getLoanTypeById(payload.type, types)
    let response = {
        id: Math.floor(Math.random()*23948),
        title: loan.title,
        interest_rate: 5.9,
        status: 'Pending'
    };

    yield put({type: 'LOAN_APPLICATION_SUBMITTED', payload: {...payload, ...response}});
}

function* actionWatcher() {
    yield takeLatest('AUTHENTICATING_USER', fetchUser);
    yield takeLatest('REGISTERING_USER', registerUser);
    yield takeLatest('UPDATE_USER_PROFILE', updateUserProfile);
    yield takeLatest('UPDATE_USER_EDUCATION_HISTORY', updateUserEducationHistory);
    yield takeLatest('DELETE_USER_EDUCATION_FROM_HISTORY', deleteUserEducationFromHistory);
    yield takeLatest('LOGOUT_USER', logoutUser);

    yield takeLatest('LOADING_PROGRAMS', loadPrograms);
    yield takeLatest('APPLY_FOR_PROGRAM', applyForPrograms);
    yield takeLatest('PROCESS_PAYMENT', paymentProcessing);

    yield takeLatest('LOAD_TRANSACTIONS', loadTransactionsList);
    yield takeLatest('LOAD_WALLET_PAYMENTS', loadWalletPaymentList);

    yield takeLatest('LOAD_LOANS_APPLICATIONS', loadLoansApplicationList);
    yield takeLatest('LOAD_LOANS_DRAFT_APPLICATIONS', loadLoansDraftApplicationList);

    yield takeLatest('SUBMIT_LOAN_APPLICATION', submitLoanApplication);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
