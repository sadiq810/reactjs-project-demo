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
        case 'USER_PROFILE_UPDATED':
            return {...state, user: {...state.user, ...action.payload}};
        case 'UPDATE_EDUCATION_HISTORY':
            if (action.payload.id && action.payload.id != '') {
                let edus = state.user.education_history.filter(e => e.id != action.payload.id);
                return {...state, user: {...state.user, education_history:[...edus, {...action.payload}]}};
            } else
                return {...state, user: {...state.user, education_history:[...state.user.education_history, {...action.payload, id: Math.floor(Math.random() * 1119999)}]}};
        case 'DELETE_EDUCATION':
            return {...state, user: {...state.user, education_history:state.user.education_history.filter(edu => edu.id != action.payload)}};
        case 'USER_LOGOUT':
            return {...state, user: undefined, isLoggedIn: false}
        default:
            return state;
    }
};
export default reducer;
