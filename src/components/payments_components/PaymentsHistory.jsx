import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const PaymentsHistory = ({payments = [], history}) => {
    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-30'}>Payments History</h5>
                            <table className={'table'}>
                                <thead className="table-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Items</th>
                                    <th>Amount</th>
                                    <th>Method</th>
                                    <th>Credit Balance</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    payments.map(p => {
                                        return (
                                            <tr key={p.id}>
                                                <td>#{p.id}</td>
                                                <td>{p.date}</td>
                                                <td>{p.title}</td>
                                                <td>${p.amount.toFixed(2).toLocaleString()}</td>
                                                <td>{p.method}</td>
                                                <td>${p.amount.toFixed(2).toLocaleString()}</td>
                                                {/*<td><button onClick={() => history.push('/payment-options/'+p.id)} className={'btn btn-primary btn-sm'}>Pay</button></td>*/}
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
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
    payments: state.payments.payment_history
    //  programs: state.programs.programs,
  //  user_programs: getUserUnPaidPrograms(state.programs.user_programs),
  //  loading: state.programs.loading,
 //   isLoggedIn: state.users.isLoggedIn,
   // error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentsHistory));
