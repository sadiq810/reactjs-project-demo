import React from "react";
import {Link, withRouter} from 'react-router-dom';
import Icon from "../assets/images/banner.jpg";
import AsuIcon from "../assets/images/asu.jpg";
import {loadPrograms} from "../redux/actions";
import {connect} from "react-redux";
import {getProgramById} from "../redux/selectors/ProgramSelector";

const UniversityDetail = ({match, programs, history}) => {
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
                                <h2 className={'bold--text'}>University of Chichester</h2>
                                <p className={'subheading'}>Full program details & costs, with admission requirements.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 bg-white p-4 rounded">
                            <h3 className={'font-weight--bold'}>Program Facts</h3>
                            <p className={'mb-0'}>{p.university.title}</p>
                            <span className={'font-weight--normal'}>{p.university.location}</span>
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

            <div className="col-lg-3 col-md-3 vl2">
                <p >About</p>
                <p>Location</p>
                <p>Financial</p>
                <p>Programs</p>

            </div>

            <div className="container-fluid noor bg-white mb-30">
                <div className="row program--description">
                    <h3 className={'font-weight--bold'}>About</h3>
                    <p>Audio Player Use Up/Down Arrow keys to increase or decrease volume.
                        Even though Israel is a small country it is always in the
                        news.  The news continues to report on Jews moving to Israel, on
                        the technology invented there, but also on conflict, wars and tensions w
                        ith surrounding people.  Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known, went on a camping trip in that part of the world.  The Bible says that his story affects our future.

                        This ancient man is Abraham (also known as Abram).  We can t
                        ake his story seriously because the places and cities he visited ar
                        e mentioned in other old writings.</p>
<p>
    Most of us wonder if there is a God and if He really is the God of the Bible. In the Bible God says ‘I will make your name great’ and today the name of Abraham/Abram
    is known worldwide. This promise has come true. The earliest copy of Genesis found in t
    he Dead Sea Scrolls is dated 200-100 B.C. which means the promise has been in writing since at le
    ast that time. At that time the name of Abraham was not well-known so the promise came true only afte
    r it was written down, not before.
</p>
                    <a className={"a1"}>READ MORE</a>

                </div>
            </div>
<br/>



            <div className="container-fluid noor2 bg-white mb-30">
                <div className="row program--description">
                    <h3 className={'font-weight--bold'}>Location</h3>
                    <div>
                        <button className={"btn btn40"}>Street view</button>
                        <button className={"btn btn41"}>Map view</button>

                    </div>

                </div>
            </div>


            <div className="container-fluid noor2 bg-white mb-30">
                <div className="row program--description">
                    <h3 className={'font-weight--bold'}>Financials</h3>

                    <div className="container">
                        <div className="row">
                            <div className={""}>
                                <p className={"para31"}> DESCRIPTION</p>
                                <p className={"para34"}> Avg Cost of Tuition/Year</p>
                                <p className={"para34"}> Cost of Living/Year</p>
                                <p className={"para34"}> *Application Fee</p>

                            </div>
                            <div className={" king2"}>
                                <p className={"para31"}>SUBTOTAL</p>
                                <p className={"para34"}>$20171.00 USD</p>
                                <p className={"para34"}>$210000.00 USD</p>
                                <p className={"para34"}>$0.00 USD</p>
                                <p>*Charged once of each program</p>
                            </div>
                            <hr className={"hori1"}></hr>
                    </div>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className={""}>
                                <p className={"para31"}>Estimated Total/Year</p>
                            </div>
                            <div className={" king1"}>
                                <p className={"para31"}>$40171.00 USD</p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>

            <div className="container-fluid noor2 bg-white mb-30">
                <div className="row program--description">
                    <h3 className={'font-weight--bold'}>Programs</h3>
               <div className={"row"}>
                   <div className={"col-lg-8"}>
                       <p>Search by program title</p>
                       <input type="text"  name={'program_levels'} className={'form-control form-control2 bg-gray'} placeholder={"I don't have this"} />
                   </div>
                   <div className={"col-lg-4"}>
                       <p className={"form1"}>Sort by</p>
                       <input type="text"  name={'program_levels'} className={'form1 form-control form-control2 bg-gray'} placeholder={"I don't have this"} />
                   </div>
              </div>

                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <p className={"form4"}>Select Level</p>
                            <input type="text"  name={'program_levels'} className={'form4 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        </div>
                        <div className={"col-lg-4"}>
                            <p className={"form3"}>Select Discipline...</p>
                            <input type="text"  name={'program_levels'} className={'form3 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        </div>

                        <div className={"col-lg-4"}>
                            <p className={"form1"}>Select Intakes...</p>
                            <input type="text"  name={'program_levels'} className={'form1 form-control form-control3 bg-gray'} placeholder={"I don't have this"} />
                        <button className={"btn button12"}>Clear Filters</button>
                        </div>

                    </div>


                </div>
                <hr></hr>
                <div className={"row bg-white "}>
                    <div className="logos col-lg-2 col-sm-2 col-md-2 legend-wrapper">

                        <div className={'super1 col-lg-12 col-sm-12 col-md-12 program--type'}>
                            <p className={' font-weight--normal program1'}>Program type</p>
                            <p className={' font-weight--bold'}>{ p.type }</p>
                        </div>
                    </div>
                    <div className=" col-lg-8 col-sm-8 col-md-8 program--box">
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 program3">
                                <h6 className={'font-weight--bold '}>{ p.title}</h6>
                                <p className={'super2 font-weight--normal'}>{p.university.title}, {p.university.location}</p>
                            </div>
                            <div className=" col-lg-6 col-sm-6 col-md-6 program--duration">
                                <p className="khan font-weight--normal">Duration</p>
                                <p className={'khan font-weight--bold'}>{p.duration} Years</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-6 program--annual-tuition">
                                <p className=" font-weight--normal">Annual tuition fee</p>
                                <p className={'font-weight--bold'}>0.00 USD</p>
                            </div>

                                <p className={"program4"}>Intakes</p>

                            <div className={"row program4" }>

                                    <p className={"col-lg-7"}>
                                        <span className={"date1"}>Jan 2021</span>
                                        <span className={"date2"}> Mar 2021</span>
                                        <span className={"date3"}>Aug 20221</span>
                                    </p>

                                <p className={"col-lg-7 program9 "}>
                                    <span className={"date4"}>Jan 2022</span>
                                    <span className={"date5"}> Mar 2022</span>
                                    <span className={"date6"}>Aug 20222</span>
                                </p>
                            </div>



                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                        <button className={'btn btn-primary btn-sm'} onClick={() => history.push('/apply-university/'+p.id)}>Apply</button>

                    </div>
                </div>
                <hr></hr>

                <div className={"row bg-white "}>
                    <div className="logos col-lg-2 col-sm-2 col-md-2 legend-wrapper">

                        <div className={'super1 col-lg-12 col-sm-12 col-md-12 program--type'}>
                            <p className={' font-weight--normal program1'}>Program type</p>
                            <p className={' font-weight--bold'}>{ p.type }</p>
                        </div>
                    </div>
                    <div className=" col-lg-8 col-sm-8 col-md-8 program--box">
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 program3">
                                <h6 className={'font-weight--bold '}>{ p.title}</h6>
                                <p className={'super2 font-weight--normal'}>{p.university.title}, {p.university.location}</p>
                            </div>
                            <div className=" col-lg-6 col-sm-6 col-md-6 program--duration">
                                <p className="khan font-weight--normal">Duration</p>
                                <p className={'khan font-weight--bold'}>{p.duration} Years</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-6 program--annual-tuition">
                                <p className=" font-weight--normal">Annual tuition fee</p>
                                <p className={'font-weight--bold'}>0.00 USD</p>
                            </div>

                            <p className={"program4"}>Intakes</p>

                            <div className={"row program4" }>

                                <p className={"col-lg-7"}>
                                    <span className={"date1"}>Jan 2021</span>
                                    <span className={"date2"}> Mar 2021</span>
                                    <span className={"date3"}>Aug 20221</span>
                                </p>

                                <p className={"col-lg-7 program9 "}>
                                    <span className={"date4"}>Jan 2022</span>
                                    <span className={"date5"}> Mar 2022</span>
                                    <span className={"date6"}>Aug 20222</span>
                                </p>
                            </div>



                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                        <button className={'btn btn-primary btn-sm'} onClick={() => history.push('/apply-university/'+p.id)}>Apply</button>

                    </div>
                </div>
                <hr></hr>

                <div className={"row bg-white "}>
                    <div className="logos col-lg-2 col-sm-2 col-md-2 legend-wrapper">

                        <div className={'super1 col-lg-12 col-sm-12 col-md-12 program--type'}>
                            <p className={' font-weight--normal program1'}>Program type</p>
                            <p className={' font-weight--bold'}>{ p.type }</p>
                        </div>
                    </div>
                    <div className=" col-lg-8 col-sm-8 col-md-8 program--box">
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 program3">
                                <h6 className={'font-weight--bold '}>{ p.title}</h6>
                                <p className={'super2 font-weight--normal'}>{p.university.title}, {p.university.location}</p>
                            </div>
                            <div className=" col-lg-6 col-sm-6 col-md-6 program--duration">
                                <p className="khan font-weight--normal">Duration</p>
                                <p className={'khan font-weight--bold'}>{p.duration} Years</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-md-6 program--annual-tuition">
                                <p className=" font-weight--normal">Annual tuition fee</p>
                                <p className={'font-weight--bold'}>0.00 USD</p>
                            </div>

                            <p className={"program4"}>Intakes</p>

                            <div className={"row program4" }>

                                <p className={"col-lg-7"}>
                                    <span className={"date1"}>Jan 2021</span>
                                    <span className={"date2"}> Mar 2021</span>
                                    <span className={"date3"}>Aug 20221</span>
                                </p>

                                <p className={"col-lg-7 program9 "}>
                                    <span className={"date4"}>Jan 2022</span>
                                    <span className={"date5"}> Mar 2022</span>
                                    <span className={"date6"}>Aug 20222</span>
                                </p>
                            </div>



                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                        <button className={'btn btn-primary btn-sm'} onClick={() => history.push('/apply-university/'+p.id)}>Apply</button>

                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UniversityDetail));
