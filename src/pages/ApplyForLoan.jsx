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
    let [tab, setTab] = useState('types');
    let [loan, setLoan] = useState({type: '', sub_type: '', goal: '', loan_refinancing: '', rate_checking_today: '', loan_amount: '', dob: '', phone: '',
    street: '', apartment: '', city: '', state: '', zipcode: '', living_status: '', degree: '',
    graduate_school: '', graduate_program: '', graduate_date: '',undergraduate_school: '', undergraduate_program: '', undergraduate_date: '',
    employment_status: '', is_other_income: '', annual_income: '', rate_checking: ''});

    const setState = (field, value) => {
        setLoan({...loan, [field]: value})
    }

    const getComponent = () => {
        switch (tab) {
            case 'types':
                return <LoanTypesComponent setTab={setTab} setState={setState} loan={loan}/>;
            case 'loan_info':
                return <LoanInfoComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>;
            case 'about_you':
                return <AboutYouComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'residence':
                return <ResidenceComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'education':
                return <EducationComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'employment':
                return <EmploymentComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'your_rate':
                return <YourRateComponent tab={tab} setTab={setTab} setState={setState} loan={loan}/>
            case 'done':
                return <LoanApplicationDone setTab={setTab} setState={setState}/>
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
