import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";

const LoanInfoComponent = ({user, history, setTab}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-3">
                            <SidebarComponent />
                        </div>
                        <div className="simple2 col-lg-6 col-md-3">
                            <label>Select which loan would<br/> you like to apply for</label>

                            <div className="row">
                                <button className="btn btn1 col-lg-4">Student Loan Refinancin<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn1 col-lg-4">Graduate Loans<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn1 col-lg-4">Undergraduate Loans<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn1 col-lg-4">Law & MBA Loans<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn1 col-lg-4">Parents Loans<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>

                            </div>
                            <div className="col-lg-12 col-md-3 simple">
                                <label>What is your primary goal when it comes to your students loans?</label>


                                <div className="row">
                                    <button className="btn btn1 col-lg-4">Lower my interest rate<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                    <button className="btn btn1 col-lg-4">Go out of debt faster<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                    <button className="btn btn1 col-lg-4">Lower my monthly payment<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                    <button className="btn btn1 col-lg-4">Conslidate my student loans<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                    <button className="btn btn1 col-lg-6">All of the above<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>

                                </div>
                            </div>
                            <div className="col-lg-12 col-md-3 simple">
                                <label>What type of student loans are you refinancing?</label>
                                <p className="para">
                                    We want to make sure your are caught up to the recent government changes to Federal
                                    student loans and doing whats best for you
                                </p>
                            </div>
                            <div className="row">
                                <button className="btn btn2 col-lg-2">Federal<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn2 col-lg-2">Mix of both<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn2 col-lg-2">Private<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                            </div>


                            <div className="col-lg-12 col-md-3 simple">
                                <label>How would you like to check your rate today?</label>
                                <p className="para">
                                    We want to make sure your are caught up to the recent government changes to Federal
                                    student loans and doing whats best for you
                                </p>
                            </div>
                            <div className="row">
                                <p className=" btn3 col-lg-2"> Link my current loans
                                    <article>Speed up the process and make sure nothing is missed.</article>
                                </p>
                                <p className=" btn3 col-lg-2"><span className="span1">Enter my information manually</span>
                                    <article>Speed uo the process and make sure nothing is missed.</article>
                                </p>

                            </div>

                            <div className="col-lg-12 col-md-3 simple">
                                <label>What's the student loan amount you'd like to refinance?</label>
                                <p className="para">
                                    The amount you are refinancing must be greater than or equal to 500%.
                                </p>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Amount">
                                </input>
                                </div>
                            </div>
                        </div>

                        <LoanInfoSidebarComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoanInfoComponent));
