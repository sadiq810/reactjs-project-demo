import React from "react";
import { withRouter } from 'react-router-dom';
import Icon from "../assets/images/banner.jpg";
import AsuIcon from "../assets/images/asu.jpg";
import {loadPrograms} from "../redux/actions";
import {connect} from "react-redux";
import {getProgramById} from "../redux/selectors/ProgramSelector";
import FactsComponent from "../components/programs_components/FactsComponent";

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
                        <FactsComponent p={p}/>
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
