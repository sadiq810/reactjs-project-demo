export const authenticateUser = (payload) => ({ type: 'AUTHENTICATING_USER', payload });
export const registerUser = (payload) => ({ type: 'REGISTERING_USER', payload });
export const updateUserProfile = (payload) => ({ type: 'UPDATE_USER_PROFILE', payload });
export const updateUserEducationHistory = (payload) => ({ type: 'UPDATE_USER_EDUCATION_HISTORY', payload });
export const deleteUserEducationFromHistory = (payload) => ({ type: 'DELETE_USER_EDUCATION_FROM_HISTORY', payload });
export const logoutUser = () => ({ type: 'LOGOUT_USER' });

export const loadPrograms = (payload) => ({ type: 'LOADING_PROGRAMS', payload });
export const applyForProgram = (payload) => ({ type: 'APPLY_FOR_PROGRAM', payload });
export const processPaymentForProgram = (payload) => ({ type: 'PROCESS_PAYMENT', payload });