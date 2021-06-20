import Logo from "./Logo";
import Navigation from "./Navigation";
import {withRouter, Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <> {
            (props.history.location.pathname === '/login' || props.history.location.pathname === '/register') ?
                ('') : (
                    <header className="header-five sticky-lg-top bottom--shadow">
                        <div className="header-bottom-area bg-white">
                            <div className="container-fluid container-custom-150">
                                <div className="row align-items-center">
                                    <div className="col-lg-10 col-md-6 col-5">
                                        <div className="header-five-left-side-box" style={{float: 'left', marginTop: '2%'}}>
                                            <Logo />
                                        </div>
                                        <div className={'header-five-right-side'}>
                                            <div className="main-menu-area text-center ml-3">
                                                <nav className="navigation-menu">
                                                    <Navigation />
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-7">
                                        <div className="header-five-right-side">
                                            <Link to="/login" className="sign-up-action-button btn-bg-5 btn-lg btn">
                                                Log in
                                            </Link>
                                            {/* mobile menu */}
                                            <div className="mobile-navigation-icon d-block d-lg-none" id="mobile-menu-trigger">
                                                <i />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )
            }
        </>)
}

export default withRouter(Header);
