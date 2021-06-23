import users from '../../assets/data/users';


const reducer = (state = {user: undefined, isLoggedIn: false, loading: false, isRegistering: false, userList: users, error: '', regError: '', regMsg: ''}, action) => {
    switch (action.type) {
        case 'AUTHENTICATING_USER':
            return { ...state, loading: true, error: '' };
        case 'USER_AUTHENTICATED':
            return { ...state, user: action.payload, loading: false, error: '', isLoggedIn: true };
        case 'USER_AUTHENTICATION_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'REGISTERING_USER':
            return { ...state, isRegistering: true, regError: '', regMsg: '' };
        case 'USER_REGISTRATION_ERROR':
            return { ...state, isRegistering: false, regError: action.payload, regMsg: '' };
        case 'USER_REGISTERED':
            return { ...state, userList: [...state.userList, action.payload.user], isRegistering: false, regError: '', regMsg: action.payload.message };
        default:
            return state;
    }
};
export default reducer;
