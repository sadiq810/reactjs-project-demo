import {types} from "../../assets/data/loan_details";

const PaymentReducer = (state = {applications: [], draft_applications: [], isLoading: false, fetched: false, isLoadingDraft: false, draftFetched: false, loan_types: types}, action) => {
    switch (action.type) {
        case 'LOADING_LOANS_APPLICATIONS':
            return {...state, isLoading: true};
        case 'LOANS_APPLICATIONS_LOADED':
            return {...state, isLoading: false, applications: action.payload, fetched: true};
        case 'LOADING_LOANS_DRAFT_APPLICATIONS':
            return {...state, isLoadingDraft: true};
        case 'LOANS_DRAFT_APPLICATIONS_LOADED':
            return {...state, isLoadingDraft: false, draftFetched: true, draft_applications: action.payload};
        case 'LOAN_APPLICATION_SUBMITTED':
            return {...state, applications: [...state.applications, {...action.payload}]};
        default:
            return state;
    }
};

export default PaymentReducer;
