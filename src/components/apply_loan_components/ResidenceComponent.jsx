import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";

const ResidenceComponent = ({user, history, setTab}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Residence Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-3">
                            <SidebarComponent />
                        </div>
                        <div className="col-lg-6 col-md-3">
                            <h3 className="hh3">Now, tell us about residence.</h3>
                            <div className="col-lg-12 col-md-3 simple3">
                                <label>What is your current living arrangement?</label>
                                <p className="para">
                                    This help us find a loan that accounts for other monthly expenses
                                </p>
                            </div>
                            <div className="row">
                                <button className="btn btn4 col-lg-2">I own a home<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn4 col-lg-2">I rent<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                                <button className="btn btn4 col-lg-2">I live with family or friends<span>
                    <i className="icofont-check-circled soon"></i>
                </span></button>
                            </div>


                            <div className="col-lg-12 col-md-3 simple">
                                <label>What's your contact information?</label>
                                <p className="para">
                                    We'll only reach out to you if we have questions about your loan.
                                </p>
                            </div>
                            <div className="row">
                                <input type="address" className="form-control col-lg-4 address1" id="exampleFormControlInput1"
                                       placeholder="Street Address...">
                                </input>
                                <input type="address" className="form-control col-lg-4 address2" id="exampleFormControlInput1"
                                       placeholder="Apartment, unit , floor">
                                </input>

                                <input type="address" className="form-control col-lg-4 address1" id="exampleFormControlInput1"
                                       placeholder="City...">
                                </input>
                                <input type="address" className="form-control col-lg-4 address2" id="exampleFormControlInput1"
                                       placeholder="State...">
                                </input>

                                <input type="address" className="form-control col-lg-4 address1" id="exampleFormControlInput1"
                                       placeholder="ZipCode">
                                </input>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResidenceComponent));
