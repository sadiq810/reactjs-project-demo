import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TransactionsComponent from "./components/TransactionsComponent";

const TransactionsHistory = ({transactions}) => {
    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-30'}>Transactions History</h5>
                            {
                                transactions.map((transaction, index) => {
                                    return (<TransactionsComponent transaction={transaction} key={index} index={index}/>);
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        //load: (payload = undefined) => dispatch(loadPrograms(payload)),
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    transactions: state.payments.transaction_history
   // programs: state.programs.programs,
  //  user_programs: getUserUnPaidPrograms(state.programs.user_programs),
  //  loading: state.programs.loading,
 //   isLoggedIn: state.users.isLoggedIn,
 //   error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransactionsHistory));
