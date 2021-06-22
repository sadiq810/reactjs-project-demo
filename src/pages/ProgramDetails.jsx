import React from "react";
import { withRouter } from 'react-router-dom';
import Icon from "../assets/images/banner.jpg";
import AsuIcon from "../assets/images/asu.jpg";

const ProgramDetails = (props) => {
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
                                <h2 className={'bold--text'}>Master of Arts - UX/UI Design and Development</h2>
                                <p className={'subheading'}>Full program details & costs, with admission requirements.</p>
                                <button onClick={() => props.history.push('/apply-university/12')} className={'btn btn-primary btn-medium btn-large'}>Apply</button>
                            </div>
                        </div>
                        <div className="col-lg-5 bg-white p-4 rounded">
                            <h3 className={'font-weight--bold'}>Program Facts</h3>
                            <p className={'mb-0'}>University of chichester</p>
                            <span className={'font-weight--light'}>Chichester, UK</span>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}> Program type</p>
                                        <p className={'font-weight--bold'}>Master's</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Duration</p>
                                        <p className={'font-weight--bold'}>2 Years</p>
                                    </div>
                                </div>


                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Language taught in</p>
                                        <p className={'font-weight--bold'}>English</p>
                                    </div>
                                </div>


                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Annual tuition fee</p>
                                        <p className={'font-weight--bold'}>12,345 USD</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Cost of living</p>
                                        <p className={'font-weight--bold'}>$12,345 USD/year</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5 col-sm-5 bg-gray position-relative facts--wrapper">
                                    <div className={'d-inline-block facts--marker'}>&nbsp;</div>
                                    <div className={'ml-3 d-inline-block facts--container'}>
                                        <p className={'font-weight--normal m-0'}>Next intake</p>
                                        <p className={'font-weight--bold'}>May 21</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>
                    <h3 className={'font-weight--bold'}>Admission Requirement</h3>
                    <ul>
                        <li>CGPA 3.4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ProgramDetails);
