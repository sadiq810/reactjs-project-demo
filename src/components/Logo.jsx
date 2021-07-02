import {connect} from "react-redux";

const Logo = ({isLoggedIn}) => {
    return (
        <div className="logo">
            <a href="/">
                {
                    isLoggedIn ? (<img src="assets/images/logo/logo2.png" className="img-fluid" style={{width: '88px'}} alt="" />) : (<img src="assets/images/logo/logo.png" className="img-fluid" alt="" />)
                }
            </a>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    isLoggedIn: state.users.isLoggedIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
