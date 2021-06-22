import React, {useState} from "react";
import UniversityDetails from "../components/apply_university_components/UniversityDetails";
import PersonalDetails from "../components/apply_university_components/PersonalDetails";
import DetailConfirmation from "../components/apply_university_components/DetailConfirmation";
import ApplicationSent from "../components/apply_university_components/ApplicationSent";

const ApplyUniversity = () => {
    let [step, setStep] = useState('university');
    const selectNext = () => {
        if (step == 'university')
            setStep('personal')
        else if (step == 'personal')
            setStep('confirmation')
        else if (step == 'confirmation')
            setStep('done')
    };

    return (
        <div id="main-wrapper">
            <div className="container-fluid bg-white mb-30">
                <div className="container">
                    <div className="row apply--form">
                        {step == 'university' ? (<UniversityDetails />) : ( step == 'personal' ? (<PersonalDetails />) : (step == 'confirmation' ? <DetailConfirmation/> : <ApplicationSent/>))}
                        <div className={'col-lg-8 form--btn-wrapper mt-40'} style={{display: (step == 'done'? 'none': 'block')}}>
                            <button className={'btn btn-default  btn-medium btn-large'}>Back</button>
                            <button className={'btn btn-primary  btn-medium btn-large'} onClick={selectNext}>{step == 'university' ? 'Next':'Submit'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyUniversity;
