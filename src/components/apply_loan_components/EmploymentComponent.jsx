import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const EmploymentComponent = ({user, history}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}> Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-3">
                            <ul className={'loan--sub-menu'}>
                                <li className={'position-relative'}>
                                    <div className={'selected'}>
                                        <i className="icofont-disc"></i>Loan Info
                                    </div>
                                </li>
                                <li><i className="icofont-check-circled"></i>About you</li>
                                <li><i className={'icofont-check-circled'}></i>Residence</li>
                                <li>Education</li>
                                <li>Employment</li>
                                <li>Your rates</li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-3">
                            <h3 className="hh3">Now, let's discuss about your employment status.</h3>
                            <div className="col-lg-12 col-md-3 simple3">
                                <label>What is your current employment status?</label>
                                <p className="para">
                                    This type of employment determines the documents we'll need to verify your income later.
                                </p>
                            </div>
                            <div className="row">
                                <p className=" btn3 col-lg-2"> Employed
                                    <article>I work for a company nad receive a year-end W2 every tax season.</article>
                                </p>
                                <p className=" btn3 col-lg-2"><span className="span1">Self Employed</span>
                                    <article>I'm a 1099 contractor, sole proprietor, or own 25% .</article>
                                </p>
                                <p className=" btn3 col-lg-2"> Future
                                    <article>I have an offer letter to start a new job within 3 months.</article>
                                </p>
                                <p className=" btn3 col-lg-2"><span className="span1">Retired</span>
                                    <article>I receive 1099-R, social security, or 402k income .</article>
                                </p>

                                <p className=" btn3 col-lg-2"><span className="span6">Not employed</span>
                                </p>
                            </div>

                            <div className="col-lg-12 col-md-3 simple3">
                                <label>Is there any income you'd like to consider?</label>
                            </div>
                            <button className="btn btn7 col-lg-2">
                                <p>Yes</p>
                            </button>
                            <button className="btn btn7 col-lg-2">
                                <p>No</p>
                            </button>


                            <div className="col-lg-12 col-md-3 simple3">
                                <label>What's your individual annual income?</label>
                                <p className="para">
                                    This information will be subject to verification.
                                </p>
                                <input type="address" className="form-control col-lg-4 address5" id="exampleFormControlInput1"
                                       placeholder="Annual income.....">
                                </input>
                                <p className="para">
                                    Alimony, child support, or separate maintenance income doesn't need to be revealed if you don't wish to have it considered as a basis for repaying this obligation.

                                </p>
                            </div>



                        </div>









                        <div className="col-lg-3 col-md-3 vl">
                            <p className="for-me">Refinance For Me</p><br/>
                            <span>2.25% - 6.43% Variable APR with autoplay</span><br/>
                            <span>2.99% - 6.88% Fixed APR with autoplay</span>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmploymentComponent));
