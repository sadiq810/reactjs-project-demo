import React from "react";
import {getUserUnPaidPrograms} from "../../redux/selectors/ProgramSelector";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const UnpaidApplications = ({user_programs}) => {
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
                {
                    user_programs.map(p => {
                        return (
                            <tr>
                                <td>#{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.university}</td>
                                <td>{p.estart_date}</td>
                                <td>{p.start_date}</td>
                                <td>${p.fee.toLocaleString()}</td>
                                <td><button className={'btn btn-primary btn-sm'}>Pay</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        //load: (payload = undefined) => dispatch(loadPrograms(payload)),
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    programs: state.programs.programs,
    user_programs: getUserUnPaidPrograms(state.programs.user_programs),
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UnpaidApplications));
