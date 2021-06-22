import React from "react";
import {Link} from "react-router-dom";

const PaidApplications = () => {
    return (
        <>
            <h5 className={'font-weight-bold mb-30'}>Paid Applications</h5>
            <table className={'table'}>
                <thead className="table-light">
                <tr>
                    <th>App #</th>
                    <th>Program</th>
                    <th>School</th>
                    <th>ESL Start Date</th>
                    <th>Start Date</th>
                    <th>Requirements</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>#2345</td>
                    <td>Bachelor of Design - Environmental Design - Interior Design</td>
                    <td>OCAD University</td>
                    <td>September 2022</td>
                    <td>September 2022</td>
                    <td><a href={'#'}> View Requirements</a></td>
                    <td><span className={'text-success'}>Approved</span></td>
                </tr>
                <tr>
                    <td>#11223</td>
                    <td>Bachelor of Design - Environmental Design - Interior Design</td>
                    <td>OCAD University</td>
                    <td>September 2022</td>
                    <td>September 2022</td>
                    <td><a href={'#'}> View Requirements</a></td>
                    <td><span className={'text-warning'}>Approved</span></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default PaidApplications;
