import React, {useState} from "react";
import LoanApplicationsComponent from "../components/loans_components/LoanApplicationsComponent";
import DraftsComponent from "../components/loans_components/DraftsComponent";
import ActiveLoansComponent from "../components/loans_components/ActiveLoansComponent";

const Loans = () => {
    let [tab, setTab] = useState('Active Loans');

    const getComponent = () => {
        switch (tab) {
            case 'Active Loans':
                return <ActiveLoansComponent />;
            case 'Loan Applications':
                return <LoanApplicationsComponent/>;
            case 'Drafts':
                return <DraftsComponent />
            default:
                return 'Please select a tab.';
        }
    }

    return (
        <div id="main-wrapper">
            <div className="container-fluid mWidth95percent mb-30 mt-25">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 tabs--wrapper">
                        <h2 className={'font-weight--bold mb-30'}>{ tab }</h2>
                        <p className={'mb-0 top--tabs'}>
                            <a href="#" className={tab == 'Active Loans' ? 'active--tab': ''} onClick={() => setTab('Active Loans')}>Active Loans</a>
                            <a href="#" className={tab == 'Loan Applications' ? 'active--tab': ''} onClick={() => setTab('Loan Applications')}>Applications</a>
                            <a href="#" className={tab == 'Drafts' ? 'active--tab': ''} onClick={() => setTab('Drafts')}>Drafts</a>
                        </p>
                        <div>
                            <span className="title__hr2"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    { getComponent() }
                </div>
            </div>
        </div>
    )
}

export default Loans;
