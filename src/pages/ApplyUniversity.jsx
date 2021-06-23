import React, {useEffect, useState} from "react";
import UniversityDetails from "../components/apply_university_components/UniversityDetails";
import PersonalDetails from "../components/apply_university_components/PersonalDetails";
import DetailConfirmation from "../components/apply_university_components/DetailConfirmation";
import ApplicationSent from "../components/apply_university_components/ApplicationSent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {applyForProgram} from "../redux/actions";
import {getProgramById} from "../redux/selectors/ProgramSelector";

const ApplyUniversity = ({save, match, programs}) => {
    let [step, setStep] = useState('university');
    let [data, setData] = useState({graduate: '', start_date: '', name: '', username: '', nationality: '', phone: '', email: '', permit: '',
        education_country: '', education_level: '', grading_scheme: '', english_exam_type: '', english_reading: '', english_listening: '',
        english_writing: '', english_speaking: '',
        gmat_verbal_score: '', gmat_verbal_rank: '', gmat_quantitative_score: '', gmat_quantitative_rank: '', gmat_writing_score: '',
        gmat_writing_rank: '', gmat_total_score: '', gmat_total_rank: '', gre_verbal_score: '', gre_verbal_rank: '', gre_quantitative_score: '',
        gre_quantitative_rank: '', gre_writing_score: '', gre_writing_rank: ''});

    const setState = (field, value) => {
        setData({...data, [field]: value});
    }

    useEffect(() => {
       if (step == 'done')
           save({data, program: getProgramById(match.params.id, programs)});
    });

    return (
        <div id="main-wrapper">
            <div className="container-fluid bg-white mb-30">
                <div className="container">
                    <div className="row apply--form">
                        {step == 'university' ?
                            (<UniversityDetails setStep={setStep} setState={setState} data={data}/>) :
                            ( step == 'personal' ? (<PersonalDetails  setStep={setStep} setState={setState} data={data}/>) :
                                (step == 'confirmation' ? <DetailConfirmation setStep={setStep} setState={setState} data={data}/> :
                                    <ApplicationSent/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (payload) => dispatch(applyForProgram(payload)),
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    programs: state.programs.programs,
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplyUniversity));
