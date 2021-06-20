import Logo from "./Logo";
import Navigation from "./Navigation";

const MobileOerLay = () => {
    return (
        <div className="mobile-menu-overlay" id="mobile-menu-overlay">
            <div className="mobile-menu-overlay__inner">
                <div className="mobile-menu-overlay__header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-8">
                                <Logo />
                            </div>
                            <div className="col-md-6 col-4">
                                {/* mobile menu content */}
                                <div className="mobile-menu-content text-end">
                                    <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay__body">
                    <nav className="offcanvas-navigation">
                        <Navigation />
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MobileOerLay;
