import React from "react";

const UnpaidApplications = () => {
    return (
        <>
            <h5 className={'font-weight-bold mb-30'}>Unpaid Applications</h5>
            <table className={'table'}>
                <thead className="table-light">
                <tr>
                    <th>App #</th>
                    <th>Program</th>
                    <th>School</th>
                    <th>ESL Start Date</th>
                    <th>Start Date</th>
                    <th>Fees</th>
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
                    <td>$2556.00</td>
                    <td><button className={'btn btn-primary btn-sm'}>Pay</button></td>
                </tr>
                <tr>
                    <td>#11223</td>
                    <td>Bachelor of Design - Environmental Design - Interior Design</td>
                    <td>OCAD University</td>
                    <td>September 2022</td>
                    <td>September 2022</td>
                    <td>$2556.00</td>
                    <td><button className={'btn btn-primary btn-sm'}>Pay</button></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default UnpaidApplications;
