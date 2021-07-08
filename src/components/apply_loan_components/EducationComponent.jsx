import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const EducationComponent = ({user, history}) => {
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
                            <h3 className="hh3">Next, let's talk about your education.</h3>
                            <div className="col-lg-12 col-md-3 simple3">
                                <label>What's the highest degree you've completed?</label>

                            </div>
                            <div className="row">
                                <button className="btn btn4 col-lg-2">Undergraduate<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn4 col-lg-2">Graduate<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn4 col-lg-2">I'm still worlikng on it.<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                            </div>


                            <div className="col-lg-12 col-md-3 simple">
                                <label>What are the details of your graduate degree?</label>

                            </div>
                            <div className="row">
                                <input type="address" className="form-control col-lg-4 address5" id="exampleFormControlInput1"
                                       placeholder="Graduate school">
                                </input>

                                <input type="address" className="form-control col-lg-4 address1" id="exampleFormControlInput1"
                                       placeholder="Graduate program">
                                </input>
                                <input type="address" className="form-control col-lg-4 address2" id="exampleFormControlInput1"
                                       placeholder="Graduation date">
                                </input>

                            </div>


                            <div className="col-lg-12 col-md-3 simple">
                                <label>What are the details of your undergraduate degree?</label>

                            </div>
                            <div className="row">
                                <input type="address" className="form-control col-lg-4 address5" id="exampleFormControlInput1"
                                       placeholder="Undergraduate school">
                                </input>

                                <input type="address" className="form-control col-lg-4 address1" id="exampleFormControlInput1"
                                       placeholder="Undergraduate program">
                                </input>
                                <input type="address" className="form-control col-lg-4 address2" id="exampleFormControlInput1"
                                       placeholder="Graduation date">
                                </input>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EducationComponent));
