import React, {useState} from "react";
import LoanTypesComponent from "../components/apply_loan_components/LoanTypesComponent";
import LoanInfoComponent from "../components/apply_loan_components/LoanInfoComponent";
import AboutYouComponent from "../components/apply_loan_components/AboutYouComponent";
import ResidenceComponent from "../components/apply_loan_components/ResidenceComponent";
import EducationComponent from "../components/apply_loan_components/EducationComponent";
import EmploymentComponent from "../components/apply_loan_components/EmploymentComponent";
import YourRateComponent from "../components/apply_loan_components/YourRateComponent";

const ApplyForLoan = () => {
    let [tab, setTab] = useState('residence');

    const getComponent = () => {
        switch (tab) {
            case 'types':
                return <LoanTypesComponent />;
            case 'loan_info':
                return <LoanInfoComponent/>;
            case 'about_you':
                return <AboutYouComponent />
            case 'residence':
                return <ResidenceComponent />
            case 'education':
                return <EducationComponent />
            case 'employment':
                return <EmploymentComponent />
            case 'your_rate':
                return <YourRateComponent />
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
