import React, {useState} from "react";
import GeneralInformation from "../components/profile_components/GeneralInformation";

const Profile = () => {
    let [tab, setTab] = useState('general');

    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30 mt-25">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={'font-weight--bold mb-30'}>Profile</h2>
                        <p className={'mb-0 top--tabs'}>
                            <a href="#" onClick={() => setTab('general')} style={tab == 'general' ? {fontWeight: 'bold'}: {}}>General Information</a>
                            <a href="#">Education History</a>
                            <a href="#">Test Scores</a>
                            <a href="#">Background Information</a>
                        </p>
                        <div>
                            <span className="title__hr"></span>
                            <span className="title__hr2"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    <div className="container-fluid mWidth95percent bg-white">
                        <div className="container pt-5 pb-5">

                            <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                                <div className="row bg-white program--wrapper">
                                    {tab == 'general' ? (<GeneralInformation />): (<h2>Coming soon</h2>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
