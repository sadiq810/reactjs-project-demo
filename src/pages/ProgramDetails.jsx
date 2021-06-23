import React from "react";
import { withRouter } from 'react-router-dom';
import Icon from "../assets/images/banner.jpg";
import AsuIcon from "../assets/images/asu.jpg";
import {loadPrograms} from "../redux/actions";
import {connect} from "react-redux";
import {getProgramById} from "../redux/selectors/ProgramSelector";

const ProgramDetails = ({match, programs, history}) => {
    const program = () => {
        return getProgramById(match.params.id, programs)
    }

    let p = program();

    return (
        <div id="main-wrapper">
            <div className="site-wrapper-reveal box-shadow-top">
                <div className="container-fluid p-0 position-relative">
                    <img src={Icon} alt=""/>
                    <img src={AsuIcon} alt="" className={'rounded-circle rounded--logo--programs'}/>
                </div>
            </div>

            <div className="site-wrapper-reveal  bg-gray">
                <div className="container-fluid mWidth95percent section-space--ptb_30">
                    <div className="row">
                        <div className="col-lg-7 marginToSmallScreen">
                            <div className="row">
                                <h2 className={'bold--text'}>{ p.title }</h2>
                                <p className={'subheading'}>Full program details & costs, with admission requirements.</p>
                                <button onClick={() => history.push('/apply-university/'+match.params.id)} className={'btn btn-primary btn-medium btn-large mt-30'}>Apply</button>
                            </div>
                        </div>
                        <div className="col-lg-5 bg-white p-4 rounded">
                            <h3 className={'font-weight--bold'}>Program Facts</h3>
                            <p className={'mb-0'}>{p.university.title}</p>
                            <span className={'font-weight--light'}>{p.university.location}</span>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}> Program type</p>
                                        <p className={'font-weight--bold'}>{p.type}</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Duration</p>
                                        <p className={'font-weight--bold'}>{p.duration} Years</p>
                                    </div>
                                </div>


                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Language taught in</p>
                                        <p className={'font-weight--bold'}>{p.language}</p>
                                    </div>
                                </div>


                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Annual tuition fee</p>
                                        <p className={'font-weight--bold'}>{p.tuition_fee.toLocaleString()} USD</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Cost of living</p>
                                        <p className={'font-weight--bold'}>${p.cost_of_living.toLocaleString()} USD/year</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Next intake</p>
                                        <p className={'font-weight--bold'}>{p.next_intake}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mWidth95percent bg-white mb-30">
                <div className="row program--description">
                    <h3 className={'font-weight--bold'}>Program Description</h3>
                    <div className="" dangerouslySetInnerHTML={{ __html: p.description }}></div>

                    <h3 className={'font-weight--bold'}>Admission Requirement</h3>
                    <div className="" dangerouslySetInnerHTML={{ __html: p.requirements }}></div>
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProgramDetails));
