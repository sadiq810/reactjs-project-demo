import programs from '../../assets/data/programs';
import user_programs from "../../assets/data/user_programs";

const ProgramsReducer = (state = {programs, user_programs}, action) => {
    switch (action.type) {
        case 'LOADING_PROGRAMS':
            return { ...state, loading: true, error: '' };
        case 'LOADING_PROGRAMS_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'PROGRAMS_LOADED':
            return { ...state, programs: action.payload, loading: false, error: '' };
        case 'APPLIED_FOR_PROGRAM':
            return {...state, user_programs: [...state.user_programs, action.payload]}
        default:
            return state;
    }
};

export default ProgramsReducer;
