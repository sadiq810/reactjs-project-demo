import React, {useState} from "react";
import {updateUserEducationHistory, updateUserProfile, deleteUserEducationFromHistory} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TextBoxComponent from "../TextBoxComponent";
import EducationHistoryComponent from "./components/EducationHistoryComponent";
import CreateEducationComponent from "./components/CreateEducationComponent";

let defaultEducation = {id: '', education_level: '', education_country: '', institute_name: '', institute_language: '', institute_from: '', institute_to: '', degree_title: '', degree_awarded_on: '',
            address: '', city: '', state: '', zip_code: ''};

const EducationHistory = ({save, user, saveEducationHistory, deleteEducation}) => {
    const [info, setInfo] = useState({...user});
    const [education, setEducation] = useState(defaultEducation);

    const setState = (field, value) => {
        setInfo({...info, [field]: value});
    }

    const setEdu = (field, value) => {
        setEducation({...education, [field]: value});
    };

    const saveUserInfo = (e) => {
        e.preventDefault();
        save(info);
    }

    const saveEducation = (e) => {
        e.preventDefault();
        saveEducationHistory({...education});

        setEducation(defaultEducation);
    }

    const edit = (edu) => {
        setEducation(edu);
    }

    return (
        <>
            <div className="container-fluid mWidth95percent bg-white">
                <div className="container pt-5 pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                        <div className="row program--wrapper">
                            <h5 className={'font-weight-bold mb-2'}>Education Summary <span className={'font-weight--normal float-end profile--status'}>Not Complete <p className={'status--warning'}>&nbsp;</p></span></h5>
                            <div className="row mt-25">
                                <form action="#" onSubmit={saveUserInfo}>
                                    <div className="row">
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Country of Education'} value={info.education_country} field={'education_country'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Highest Level of Education'} value={info.education_level} field={'education_level'}/>
                                        </div>
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Grading Scheme'} value={info.grading_scheme} field={'grading_scheme'}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="mb-3 col-lg-4 col-md-4 col-sm-12">
                                            <TextBoxComponent setState={setState} label={'Grade Average'} value={info.average_grade} field={'average_grade'}/>
                                        </div>
                                    </div>

                                    <div className="row mt-40">
                                        <button type={'submit'} className={'btn btn-primary btn-large btn-medium m-auto'}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CreateEducationComponent saveEducation={saveEducation} setEdu={setEdu} education={education}/>

            <EducationHistoryComponent edit={edit}/>
        </>
        )
    }


    const mapDispatchToProps = (dispatch) => {
            return {
                save: (payload) => dispatch(updateUserProfile(payload)),
                saveEducationHistory: (payload) => dispatch(updateUserEducationHistory(payload)),
                deleteEducation: (payload) => dispatch(deleteUserEducationFromHistory(payload)),
            }
    };

    const mapStateToProps = (state) => ({
            user: state.users.user,
            isLoggedIn: state.users.isLoggedIn,
            error: state.users.error
    })

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EducationHistory));
