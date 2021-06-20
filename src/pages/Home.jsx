import React from "react";
import Icon from "../assets/images/www-amico@2x.png";

const Home = () => {
    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={'font-weight--bold mb-30'}>Programs</h2>
                        <p className={'mb-0'}>Programs</p>
                        <div><span className="title__hr"></span><span className="title__hr2"></span></div>
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
                                            <form action="#">
                                                <input type="text" placeholder={'What would you like to study ?'} />
                                                <input type="text" placeholder={'Where ? E.g School name or location'} />
                                                <button type="button" className="btn-primary btn-medium">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 sort--drpdown">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value={'1'} selected> Program name A-Z</option>
                                            <option value="2">Program name Z-A</option>
                                        </select>
                                        <span>Sort by:</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row section-space--ptb_30">
                            <div className="col-lg-3  col-md-3 col-sm-12 bg-white p-4 bradius10">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <div className="login-header mb-40">
                                                <h4 className={'bold--text font20'}>Program Filters</h4>
                                            </div>
                                            <form action="#" className={'filter--form'}>
                                                <div className={'mb-20'}>
                                                    <label htmlFor="program_levels">Program Levels</label>
                                                    <input type="text" name={'program_levels'} className={'form-control bg-gray'} placeholder={"I don't have this"}/>
                                                </div>

                                                <div className={'mb-20'}>
                                                    <label htmlFor="intakes">Intakes</label>
                                                    <input type="text" name={'intakes'} className={'form-control bg-gray'} placeholder={'Ugandan'}/>
                                                </div>
                                                <div className={'mb-20'}>
                                                    <label htmlFor="post_secondary_discipline">Post-Secondary Discipline</label>
                                                    <input type="text" name={'post_secondary_discipline'} className={'form-control bg-gray'} placeholder={'select...'}/>
                                                </div>

                                                <div className={'mb-20'}>
                                                    <label htmlFor="post_secondary_sub_category">Post-Secondary Sub-Categories</label>
                                                    <input type="text" name={'post_secondary_sub_category'} className={'form-control bg-gray'} placeholder={'select...'}/>
                                                </div>

                                                <div className={'mb-20'}>
                                                    <label htmlFor="customRange1" className="form-label">Tuition Fee</label>
                                                    <input type="range" className="form-range" id="customRange1" />
                                                </div>

                                                <div className={'mb-20'}>
                                                    <label htmlFor="customRange1" className="form-label">Application Fee</label>
                                                    <input type="range" className="form-range" id="customRange1" />
                                                </div>

                                                <div  className={'mb-20'} >
                                                    <button type="button" className="btn btn-outline-default ">Clear Filters</button>
                                                    <button type="button" className="btn btn-primary" style={{marginLeft: '10px'}}>Apply Filters</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9 col-sm-12 program--main-box">
                                <div className="row bg-white program--wrapper">
                                    <div className="col-lg-2 col-sm-2 col-md-2 legend-wrapper">
                                        <div className={'col-12 bg-gray program--legend text-center align-text-bottom'}>
                                            <p className={'font-weight--bold'}>Logo</p>
                                        </div>
                                        <div className={'col-lg-12 col-sm-12 col-md-12 program--type'}>
                                            <p className={'font-weight--light'}>Program type</p>
                                            <p className={'font-weight--bold'}>Bachelor's</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-8 col-md-8 program--box">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 col-md-12">
                                                <h6 className={'font-weight--bold'}>3-D Animation and Game Design - BFA</h6>
                                                <p className={'font-weight--light'}>University of the Incamate Word, USA</p>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 program--duration">
                                                <p className="font-weight--light">Duration</p>
                                                <p className={'font-weight--bold'}>3 Years</p>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 program--annual-tuition">
                                                <p className="font-weight--light">Annual tuition fee</p>
                                                <p className={'font-weight--bold'}>17,873 USD</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 program--box apply--box">
                                        <button className={'btn btn-primary btn-sm'}>Apply</button>
                                        <a href="#" className={'program--details'}>Program details</a>
                                        <a href="#" className={'program--see-more'}>See 65 more programs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;