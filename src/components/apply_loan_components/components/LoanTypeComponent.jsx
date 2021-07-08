import React from "react";

const LoanTypeComponent = ({title, description, selected = false}) => {
    return (
        <div className={"col-lg-4 col-md-4 col-sm-12 mt-2"}>
            <div className={"card loan--box "+(selected ? 'active--loan-box': '')}>
                <p className="font--weight-bold">Student Loanse Refinance</p>
                <p>Variable rates as low as 2.25% APR with autopay</p>
                <div className={'mt-20 text-end'}>
                <span>
                    <i className="icofont-check-circled"></i>
                </span>
                </div>
            </div>

        </div>

    )
}

export default LoanTypeComponent;
