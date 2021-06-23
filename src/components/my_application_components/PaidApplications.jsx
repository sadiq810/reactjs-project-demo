import React from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserPaidPrograms} from "../../redux/selectors/ProgramSelector";

const PaidApplications = ({user_programs}) => {
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
                {
                    user_programs.map(p => {
                        return (
                            <tr>
                                <td>#{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.university}</td>
                                <td>{p.estart_date}</td>
                                <td>{p.start_date}</td>
                                <td><a href={'#'}> View Requirements</a></td>
                                <td><span className={'text-success'}>{p.status}</span></td>
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
    user_programs: getUserPaidPrograms(state.programs.user_programs),
    loading: state.programs.loading,
    isLoggedIn: state.users.isLoggedIn,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaidApplications));
