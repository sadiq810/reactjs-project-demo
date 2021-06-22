import React from "react";

const UniversityDetails = () => {
    return (
        <>
            <h3 className={'font-weight--bold'}>University Details</h3>
            <p>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>

            <h4>What level of program are you interested in?</h4>
            <div style={{marginTop: '25px', marginLeft: '30px'}}>
                <div className="single-trams">
                    <div className="title">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Under graduate</label>
                    </div>
                </div>
                <div className="single-trams">
                    <div className="title">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2"/>
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
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">May 21</label>
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
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" value="option4"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">August 21</label>
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
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" value="option4"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">January 2022</label>
                                </div>
                            </div>
                        </td>
                        <td>2021-11-29</td>
                        <td><span className={'color-warning'}>Likely open</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UniversityDetails;
