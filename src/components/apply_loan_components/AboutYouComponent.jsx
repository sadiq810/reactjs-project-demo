import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import LoanInfoSidebarComponent from "./components/LoanInfoSidebarComponent";

const AboutYouComponent = ({user, history, setTab, loan, setState, tab}) => {
    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="row program--wrapper">
                    <div className="row">
                        <Link to={'/loans?tab=draft'} className={'d-inline-block font-weight--bold float-end text-end'}>Save & Exit</Link>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-4">
                            <SidebarComponent tab={tab}/>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h3 className="hh3">Now, let's learn more about you.</h3>
                            <p className="label3">What is your date of birth?</p>
                            <div className="mb-3">
                                <input type="text" value={loan.dob} onChange={e => setState('dob', e.target.value)} className="form-control" placeholder="Date of birth........."/>
                            </div>

                            <div>
                                <p className="label4">What is your mobile number?</p>
                                <p className="para">
                                    We'll only reach out if we have questions about this loan application.
                                </p>
                                <div className="mb-3">
                                    <input type="text" value={loan.phone} onChange={e => setState('phone', e.target.value)} className="form-control" placeholder="Mobile Phone Number..."/>
                                </div>
                            </div>

                            <div className={'col-lg-12 form--btn-wrapper mt-40 simple2'}>
                                <a className={'float-start'} onClick={() => setTab('loan_info') }><i className="icofont-curved-left"></i>Back</a>
                                <button type='button' className={'btn btn-primary  btn-medium btn-large float-end btn--mobile'} onClick={() => setTab('residence')}>Next</button>
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
