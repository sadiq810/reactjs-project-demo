const PaymentReducer = (state = {payment_history: [], transaction_history: [], isLoading: false, fetched: false, paymentsFetched: false}, action) => {
    switch (action.type) {
        case 'TRANSACTIONS_LOADING':
            return {...state, isLoading: true};
        case 'TRANSACTIONS_LOADED':
            return {...state, isLoading: false, transaction_history: action.payload, fetched: true};
        case 'PAYMENTS_HISTORY_LOADED':
            return {...state, payment_history: action.payload, paymentsFetched: true}
        default:
            return state;
    }
};

export default PaymentReducer;
