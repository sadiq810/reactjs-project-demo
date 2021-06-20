import {useEffect} from "react";
import {withRouter} from 'react-router-dom';
const MemberBenefit = (props) => {
    useEffect(() => {
        console.log(props);
    })
    return (<h1>MemberBenefit Page</h1>)
}

export default withRouter(MemberBenefit);
