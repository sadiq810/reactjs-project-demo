import {useEffect} from "react";
import {withRouter, Link} from 'react-router-dom';

import mission from '../assets/images/mission.png';
import SocialLogin from "./SocialLogin";

const Login = (props) => {
    useEffect(() => {
        console.log(props);
    })
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
                                            <p className={'float-end'}> <span className={'fw-light'}>Not a member?</span> <Link to={'/register'}> Register now</Link></p>
                                        </div>
                                    </div>
                                    <div className="row mt-40 justify-content-center mb-20">
                                        <div className="col-lg-6">
                                            <div className="login-content">
                                                <div className="login-header mb-40">
                                                    <h4 className={'bold--text font20'}>Log into Kyalo Edu Finance</h4>
                                                </div>

                                                <SocialLogin gogoleText={'Login with google'}/>

                                                <form action="#">
                                                    <label htmlFor="email" className={'bold--text'}>Email Address</label>
                                                    <input type="email" />

                                                    <label htmlFor="password" className={'bold--text'}>Password</label>
                                                    <input type="password" />

                                                    <button type="button" onClick={() => props.history.push('/')} className="btn-primary btn-large bold--text">Log in</button>
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

export default withRouter(Login);
