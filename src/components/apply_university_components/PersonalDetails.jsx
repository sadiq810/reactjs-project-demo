import React from "react";

const PersonalDetails = () => {
    return (
        <>
            <h3 className={'font-weight--bold'}>University Details</h3>
            <p>We just need a few details so we can help you at every step of your application, and check for scholarships you won't find on university websites.</p>
            <form>
                <h4>Your details</h4>
                <div className={'ps-0 mt-25'}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullname"/>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="nationality" className="form-label">Nationality</label>
                            <input type="text" className="form-control" id="nationality"/>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phone"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                </div>

                <h4>Eligibility</h4>
                <div className="row mt-25">
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Do you have a valid study permit/visa?</label>
                            <select className="form-select form-select-sm">
                                <option selected>Please select</option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Education country</label>
                            <select className="form-select form-select-sm">
                                <option selected>Please select</option>
                                <option value="1">Australia</option>
                                <option value="2">Japan</option>
                                <option value="3">United States</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Education level</label>
                            <select className="form-select form-select-sm">
                                <option selected>Please select</option>
                                <option value="3">3 years bachelor degree</option>
                                <option value="4">4 years bachelor degree</option>
                                <option value="2">2 years bachelor degree</option>
                            </select>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">Grading Scheme</label>
                            <select className="form-select form-select-sm">
                                <option selected>Please select</option>
                                <option value="1">Relative</option>
                                <option value="2">Absolute</option>
                            </select>
                        </div>

                        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="email" className="form-label">English Exam type</label>
                            <select className="form-select form-select-sm">
                                <option selected>Please select</option>
                                <option value="1">TOFEL</option>
                                <option value="2">IELTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <label htmlFor="reading" className="form-label">Reading</label>
                            <input type="text" className="form-control" id="reading"/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <label htmlFor="listening" className="form-label">Listening</label>
                            <input type="text" className="form-control" id="listening"/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <label htmlFor="writing" className="form-label">Writing</label>
                            <input type="text" className="form-control" id="writing"/>
                        </div>
                        <div className="mb-3 col-lg-3 col-md-3 col-sm-3">
                            <label htmlFor="speaking" className="form-label">Speaking</label>
                            <input type="text" className="form-control" id="speaking"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12" style={{marginRight: 'auto'}}>
                            <h4>GMAT Exam Score</h4>
                            <div className="row mt-25">
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="verbal" className="form-label">Verbal</label>
                                    <input type="text" className="form-control" id="verbal" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="verbal_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="verbal_rank" placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="quantitative" className="form-label">Quantitative</label>
                                    <input type="text" className="form-control" id="quantitative" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="quantitative_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="quantitative_rank" placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="writing" className="form-label">Writing</label>
                                    <input type="text" className="form-control" id="writing" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="writing_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="writing_rank" placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="total" className="form-label">Total</label>
                                    <input type="text" className="form-control" id="total" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="total_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="total_rank" placeholder={'Rank %'}/>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h4>GRE Exam Score</h4>
                            <div className="row mt-25">
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_verbal" className="form-label">Verbal</label>
                                    <input type="text" className="form-control" id="gre_verbal" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_verbal_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="gre_verbal_rank" placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_quantitative" className="form-label">Quantitative</label>
                                    <input type="text" className="form-control" id="gre_quantitative" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_quantitative_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="gre_quantitative_rank" placeholder={'Rank %'}/>
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_writing" className="form-label">Writing</label>
                                    <input type="text" className="form-control" id="gre_writing" placeholder={'Score'}/>
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="gre_writing_rank" className="form-label">&nbsp;</label>
                                    <input type="text" className="form-control" id="gre_writing_rank" placeholder={'Rank %'}/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default PersonalDetails;
