import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const AboutYouComponent = ({user, history}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Save & Exit</Link>
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
                            <h3 className="hh3">Now, let's learn more about you.</h3>
                            <p className="label3">What is your date of birth?</p>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Date of birth.........">
                                </input>
                            </div>


                            <div>
                                <p className="label4">What is your mobile number?</p>
                                <p className="para">
                                    We'll only reach out if we have questions about this loan application.
                                </p>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                           placeholder="Mobile Phone Number...">
                                    </input>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AboutYouComponent));
