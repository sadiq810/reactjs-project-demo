import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import RadioComponent from "../RadioComponent";

const UniversityDetails = ({setStep, history, setState, data}) => {
    const submit = (e) => {
        e.preventDefault();
        setStep('personal');
    }
    return (
        <>
            <h3 className={'font-weight--bold'}>University Details</h3>
            <p>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>

            <h4>What level of program are you interested in?</h4>
            <form action="#" onSubmit={submit}>
                <div style={{marginTop: '25px', marginLeft: '30px'}}>
                    <div className="single-trams">
                        <div className="title">
                            <RadioComponent setState={setState} name={"inlineRadioOptions"} field={'graduate'} value={'under_graduate'} label={'Under graduate'}/>
                        </div>
                    </div>
                    <div className="single-trams">
                        <div className="title">
                            <RadioComponent setState={setState} name={"inlineRadioOptions"} field={'graduate'} value={'post_graduate'} label={'Post graduate'}/>
                        </div>
                    </div>
                </div>
                <h4>What is the earliest date you can start?</h4>
                <div className="col-lg-8 mt-4" style={{marginTop: '25px', marginLeft: '30px'}}>
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th>Starting Dates:</th>
                            <th>Submission deadlines:</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="single-trams">
                                    <div className="title">
                                        <RadioComponent setState={setState} name={"inlineRadioOptions3"} field={'start_date'} value={'May 21, 2021-04-09'} label={'May 21'}/>
                                    </div>
                                </div>
                            </td>
                            <td>2021-04-09</td>
                            <td><span className={'color-success'}>Open Now</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="single-trams">
                                    <div className="title">
                                        <RadioComponent setState={setState} name={"inlineRadioOptions3"} field={'start_date'} value={'August 21, 2021-07-03'} label={'August 21'}/>
                                    </div>
                                </div>
                            </td>
                            <td>2021-07-03</td>
                            <td><span className={'color-success'}>Open Now</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="single-trams">
                                    <div className="title">
                                        <RadioComponent setState={setState} name={"inlineRadioOptions3"} field={'start_date'} value={'January 2022, 2021-11-29'} label={'January 2022'}/>
                                    </div>
                                </div>
                            </td>
                            <td>2021-11-29</td>
                            <td><span className={'color-warning'}>Likely open</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'col-lg-8 form--btn-wrapper mt-40'}>
                    <button className={'btn btn-default  btn-medium btn-large'} onClick={() => history.goBack() }>Back</button>
                    <button type='submit' className={'btn btn-primary  btn-medium btn-large'}>Submit</button>
                </div>
            </form>
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
    programs: state.programs.programs,
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UniversityDetails));
