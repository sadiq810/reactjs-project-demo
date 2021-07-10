import React, {useState} from "react";
import LoanTypesComponent from "../components/apply_loan_components/LoanTypesComponent";
import LoanInfoComponent from "../components/apply_loan_components/LoanInfoComponent";
import AboutYouComponent from "../components/apply_loan_components/AboutYouComponent";
import ResidenceComponent from "../components/apply_loan_components/ResidenceComponent";
import EducationComponent from "../components/apply_loan_components/EducationComponent";
import EmploymentComponent from "../components/apply_loan_components/EmploymentComponent";
import YourRateComponent from "../components/apply_loan_components/YourRateComponent";
import LoanApplicationDone from "../components/apply_loan_components/LoanApplicationDone";

const ApplyForLoan = () => {
    let [tab, setTab] = useState('loan_info');

    const getComponent = () => {
        switch (tab) {
            case 'types':
                return <LoanTypesComponent setTab={setTab}/>;
            case 'loan_info':
                return <LoanInfoComponent setTab={setTab}/>;
            case 'about_you':
                return <AboutYouComponent setTab={setTab}/>
            case 'residence':
                return <ResidenceComponent setTab={setTab}/>
            case 'education':
                return <EducationComponent setTab={setTab}/>
            case 'employment':
                return <EmploymentComponent setTab={setTab}/>
            case 'your_rate':
                return <YourRateComponent setTab={setTab}/>
            case 'done':
                return <LoanApplicationDone setTab={setTab}/>
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
