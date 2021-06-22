import React from "react";

const GeneralInformation = () => {
    return (
        <>
            <h5 className={'font-weight-bold mb-2'}>Personal Information <span className={'font-weight--normal float-end profile--status'}>Not Complete <p>&nbsp;</p></span></h5>
            <p>(As included in your passport)</p>
            <div className="row mt-25">
                <form action="#">
                    <div className="row">
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstname"/>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="middlename" className="form-label">Middle Name</label>
                            <input type="text" className="form-control" id="middlename"/>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastname"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input type="text" className="form-control" id="dob"/>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="first_language" className="form-label">First Language</label>
                            <input type="text" className="form-control" id="first_language"/>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="citizenship" className="form-label">Country of Citizenship</label>
                            <input type="text" className="form-control" id="citizenship"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="passport_no" className="form-label">Passport Number</label>
                            <input type="text" className="form-control" id="passport_no"/>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <div className={'multiple--radio--wrapper'}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={true}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">X</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                            <label htmlFor="marital" className="form-label">Marital Status</label>
                            <div className={'multiple--radio--wrapper'}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="marital_status" id="flexRadioDefault12"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault12">Single</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="marital_status" id="flexRadioDefault22" defaultChecked={true}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault22">Married</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="marital_status" id="flexRadioDefault32"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault32">Divorced</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="marital_status" id="flexRadioDefault42"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault42">Separated</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className={'mt-25'}>Address Detail</h4>
                    <div className={'ps-0 mt-25'}>
                        <div className="row">
                            <div className="mb-3 col-lg-8 col-md-8 col-sm-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address"/>
                            </div>
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="city_town" className="form-label">City/Town</label>
                                <input type="text" className="form-control" id="city_town"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input type="text" className="form-control" id="country"/>
                            </div>
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="province_state" className="form-label">Province/State</label>
                                <input type="text" className="form-control" id="province_state"/>
                            </div>
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="postal_zip_code" className="form-label">Postal/Zip code</label>
                                <input type="text" className="form-control" id="postal_zip_code"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phone"/>
                            </div>
                        </div>
                        <div className="row mt-40">
                            <button className={'btn btn-primary btn-large btn-medium m-auto'}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GeneralInformation;
