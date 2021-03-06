import React, {useState} from "react";
import Icon from '../assets/images/www-amico@2x.png'
import {filterPrograms} from "../redux/selectors/ProgramSelector";
import {loadPrograms} from "../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SearchComponent from "../components/programs_components/SearchComponent";
import SortComponent from "../components/programs_components/SortComponent";
import FiltersComponent from "../components/programs_components/FiltersComponent";
import Program from "../components/programs_components/Program";

const FindProgram = (props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [sort, setSort] = useState('asc');
    const [filters, setFilters] = useState({level: '', intake: '', discipline: '', sub_category: '', tuition_fee: {from: 0, to: 50}, application_fee: {from: 0, to: 50}});
    const [applyFilter, setApplyFilter] = useState(false);

    const getPrograms = () => {
        return filterPrograms(props.programs, title, location, sort, applyFilter, filters);
    }

    const setState = (key, value) => {
        setFilters({...filters, [key]: value})
    }

    return (
        <div id="main-wrapper">
            <div className="site-wrapper-reveal  bg-white box-shadow-top">
                <div className="recent-article-area">
                    <div className="container section-space--ptb_120">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={Icon} alt=""/>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2 className={'bold--text'}>We'll help you find your dream program</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="archive-post-inner-wrap">
                                    <div className="login-content find--program--search">
                                        <SearchComponent title={title} setTitle={setTitle} location={location} setLocation={setLocation} classes={'btn-large bold--text'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal  bg-gray">
                <div className="recent-article-area">
                    <div className="container-fluid section-space--ptb_80 mWidth95percent">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <SortComponent setSort={setSort} sort={sort} wrapperClass={'offset-lg-9'}/>
                            </div>
                        </div>

                        <div className="row section-space--ptb_30">
                            <FiltersComponent filters={filters} setState={setState} setApplyFilter={setApplyFilter}/>

                            <div className="col-lg-9 col-md-9 col-sm-12 program--main-box">
                                {
                                    getPrograms().map((p, key) => {
                                        return (<Program p={p} index={key} key={p.id}/>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (payload = undefined) => dispatch(loadPrograms(payload)),
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    programs: state.programs.programs,
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FindProgram));
