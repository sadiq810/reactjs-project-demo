import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";

const AboutYouComponent = ({user, history, setTab}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AboutYouComponent));
