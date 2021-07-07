import React, {useState} from "react";
import DraftsComponent from "../components/loans_components/DraftsComponent";
import LoanTypesComponent from "../components/apply_loan_components/LoanTypesComponent";
import LoanInfoComponent from "../components/apply_loan_components/LoanInfoComponent";

const ApplyForLoan = () => {
    let [tab, setTab] = useState('loan_info');

    const getComponent = () => {
        switch (tab) {
            case 'types':
                return <LoanTypesComponent />;
            case 'loan_info':
                return <LoanInfoComponent/>;
            case 'Drafts':
                return <DraftsComponent />
            default:
                return 'Please select a tab.';
        }
    }

    return (
        <div id="main-wrapper">
            <div className="site-wrapper-reveal">
                <div className="recent-article-area">
                    { getComponent() }
                </div>
            </div>
        </div>
    )
}

export default ApplyForLoan;
