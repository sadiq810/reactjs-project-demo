import React from "react";

const DetailConfirmation = () => {
    return (
        <>
            <h3 className={'font-weight--bold'}>Almost there! Please have a look at all your information to confirm you are submitting the right information</h3>
            <form>
                <h4>What level of program are you interested in?</h4>
                <div style={{marginTop: '25px', marginLeft: '30px'}}>
                    <div className="single-trams">
                        <div className="title">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2" checked={true}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Post graduate</label>
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
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" checked={true}/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">May 21</label>
                                    </div>
                                </div>
                            </td>
                            <td>2021-04-09</td>
                            <td><span className={'color-success'}>Open Now</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className={'font-weight--bold pt-5'}>University Details</h4>
                <p className={'pt-4'}>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>

                <h4>Your details</h4>
                <div className={'ps-0 mt-25'}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Full Name</p>
                            <p className={'font-weight--bold'}>John doe</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Username</p>
                            <p className={'font-weight--bold'}>john_dove</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Nationality</p>
                            <p className={'font-weight--bold'}>Japan</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Phone Number</p>
                            <p className={'font-weight--bold'}>09234274879823</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p>Email address</p>
                        <p className={'font-weight--bold'}>john@dov.com</p>
                    </div>
                </div>

                <h4 className={'mt-25'}>Eligibility</h4>
                <div className="row mt-25">
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Do you have a valid study permit/visa?</p>
                            <p className={'font-weight--bold'}>No</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Education country</p>
                            <p className={'font-weight--bold'}>Australia</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Education level</p>
                            <p className={'font-weight--bold'}>4 years bachelor degree</p>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <p>Grading Scheme</p>
                            <p className={'font-weight--bold'}>Relative</p>
                        </div>

                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                            <p>English Exam type</p>
                            <p className={'font-weight--bold'}>TOFEL</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12" style={{marginRight: 'auto'}}>
                            <h4>GMAT Exam Score</h4>
                            <div className="row mt-25">
                                <p>Verbal</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                                <p>Quantitative</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                                <p>Writing</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                                <p>Total</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h4>GRE Exam Score</h4>
                            <div className="row mt-25">
                                <p>Verbal</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                                <p>Quantitative</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                                <p>Writing</p>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Score: <span className={'font-weight--bold'}>70</span></p>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <p>Rank: <span className={'font-weight--bold'}>70%</span></p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default DetailConfirmation;
