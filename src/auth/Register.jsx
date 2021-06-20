import {withRouter, Link} from 'react-router-dom';

import mission from '../assets/images/mission.png';
import SocialLogin from "./SocialLogin";

const Register = (props) => {
    return (
        <div id="main-wrapper" className={'overflow-hidden'}>
            <div className="site-wrapper-reveal">
                <div className="login-register-page-area">
                    <div className="container-fluid" style={{padding: 0}}>
                        <div className="row" style={{margin: '-2px'}}>
                            <div className="col-lg-4" style={{padding: 0}}>
                                <img src={mission} alt=""/>
                            </div>
                            <div className="col-lg-8">
                                <div className="container-fluid" style={{paddingLeft: 0}}>
                                    <div className={'row'}>
                                        <div className="member-register mt-5">
                                            <p className={'float-end'}> <span className={'fw-light'}>Already a member?</span> <Link to={'/login'}> Sign In</Link></p>
                                        </div>
                                    </div>
                                    <div className="row mt-40 justify-content-center mb-20">
                                        <div className="col-lg-6">
                                            <div className="login-content">
                                                <div className="login-header mb-40">
                                                    <h4 className={'bold--text font20'}>Sign Up to Kyalo Edu Finance</h4>
                                                </div>

                                                <SocialLogin gogoleText={'Sign Up with google'}/>

                                                <form action="#">
                                                    <label htmlFor="email" className={'bold--text'}>Email Address</label>
                                                    <input type="email" />

                                                    <label htmlFor="password" className={'bold--text'}>Password</label>
                                                    <input type="password" />

                                                    <div className="remember-forget-wrap mb-30">
                                                        <div className="remember-wrap">
                                                            <input type="checkbox"/>
                                                                <p className={'font-weight--normal'} style={{fontSize: '10px'}}>Creating an account means you're okay with our Terms of Services, Privacy Policy and our default Notification Settings.</p>
                                                                <span className="checkmark"></span>
                                                        </div>
                                                    </div>

                                                    <button type="button" className="btn-primary btn-large bold--text">Create Account</button>
                                                </form>
                                            </div>
                                        </div>
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

export default withRouter(Register);
