import React, {useState} from "react";
import {Link, withRouter} from 'react-router-dom';
import Icon from "../assets/images/banner.jpg";
import AsuIcon from "../assets/images/asu.jpg";
import {connect} from "react-redux";
import {getProgramById, getUniversity} from "../redux/selectors/ProgramSelector";
import FactsComponent from "../components/programs_components/FactsComponent";
import AboutComponent from "../components/university_components/AboutComponent";
import LocationComponent from "../components/university_components/LocationComponent";
import FinancialComponent from "../components/university_components/FinancialComponent";
import ProgramsComponent from "../components/university_components/ProgramsComponent";

const UniversityDetail = ({match, programs, history, university}) => {
    let [tab, setTab] = useState('about');

    const program = () => {
        return getProgramById(/*match.params.id*/2, programs)
    }

    let p = program();

    const getComponent = () => {
        switch (tab) {
            case 'about':
                return <AboutComponent university={university}/>;
            case 'location':
                return <LocationComponent />;
            case 'financial':
                return <FinancialComponent />;
            case 'programs':
                return <ProgramsComponent university={university}/>
            default:
                return 'Please select a tab.';
        }
    }

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
                                <h2 className={'bold--text'}>{university.title}</h2>
                                <p className={'subheading'}>Full program details & costs, with admission requirements.</p>
                            </div>
                        </div>
                        <FactsComponent p={p}/>
                    </div>
                </div>
            </div>

            <div className="container-fluid mWidth95percent">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 vl2 university--tabs-wrapper mb-3">
                        <p className={tab == 'about' ? 'selected': ''} onClick={() => setTab('about')}>About</p>
                        <p className={tab == 'location' ? 'selected': ''} onClick={() => setTab('location')}>Location</p>
                        <p className={tab == 'financial' ? 'selected': ''} onClick={() => setTab('financial')}>Financial</p>
                        <p className={tab == 'programs' ? 'selected': ''} onClick={() => setTab('programs')}>Programs</p>
                    </div>
                    <div className={'col-lg-10 col-md-10 col-sm-12'}>
                        { getComponent() }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    programs: state.programs.programs,
    university: getUniversity(state.programs.universities),
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UniversityDetail));
