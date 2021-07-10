import React from "react";

const SidebarComponent = () => {
    return (
        <ul className={'loan--sub-menu'}>
            <li className={'position-relative'}>
                <div className={'selected'}>
                    <i className="icofont-disc"></i>Loan Info
                </div>
            </li>
            <li><i className="icofont-check-circled"></i>About you</li>
            <li><i className={'icofont-check-circled'}></i>Residence</li>
            <li>Education</li>
            <li>Employment</li>
            <li>Your rates</li>
        </ul>
    );
}


export default SidebarComponent;
