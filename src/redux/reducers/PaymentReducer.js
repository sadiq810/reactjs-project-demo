import payments_history from "../../assets/data/payments_history";
import transactions_history from "../../assets/data/transactions_history";

const PaymentReducer = (state = {payment_history: payments_history, transaction_history: transactions_history}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default PaymentReducer;
