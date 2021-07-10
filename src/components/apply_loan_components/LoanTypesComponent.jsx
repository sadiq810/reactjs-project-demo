import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import LoanTypeComponent from "./components/LoanTypeComponent";

const LoanTypesComponent = ({user, history, setTab}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                      <h3 className={'d-inline-block float-start header--title text-end'}>APPLY FOR A LOAN</h3>
                        <Link to={'/loans?tab=draft'} className={'d-inline-block header--title--btn font-weight--bold float-end text-end'}>Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <h2 className={'mt-40'}>Loans</h2>
                        <h3 className={'mt-40'}>Educational Loans</h3>
                    </div>
                    <div className="row mt-30">
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={true}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                    </div>


                    <div className="row mt-40">
                        <h3 className={'mt-40'}>Personal and Home Loans</h3>
                    </div>
                    <div className="row mt-30">
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                        <LoanTypeComponent title={'Student Loan Refinance'} description={'Variable rates as low as 2.25% APR with autopay'} selected={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    isLoggedIn: state.users.isLoggedIn,
    error: state.users.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanTypesComponent));
