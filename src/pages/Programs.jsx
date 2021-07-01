import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import { loadPrograms } from "../redux/actions";
import {connect} from "react-redux";
import Program from "../components/programs_components/Program";
import {filterPrograms} from "../redux/selectors/ProgramSelector";
import SortComponent from "../components/programs_components/SortComponent";
import FiltersComponent from "../components/programs_components/FiltersComponent";
import SearchComponent from "../components/programs_components/SearchComponent";

const Programs = (props) => {

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
            <div className="container-fluid mWidth95percent mb-30">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={'h2 font-weight--bold mb-30'}>Programs</h2>
                        <p className={'mb-0'}>Programs</p>
                        <div className={'position-relative'}><span className="title__hr"></span><span className="title__hr2"></span></div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal  bg-gray">
                <div className="recent-article-area">
                    <div className="container-fluid mWidth95percent">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                        <div className="login-content programs--program--search">
                                            <SearchComponent title={title} setTitle={setTitle} location={location} setLocation={setLocation} classes={'btn-medium'}/>
                                        </div>
                                    </div>

                                    <SortComponent setSort={setSort} sort={sort}/>

                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Programs));
