

export function signUpReducer(state, action) {
    switch (action.type) {
        case 'NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'DOB':
            return {
                ...state,
                dob: action.payload
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'CPASSWORD':
            return {
                ...state,
                cpassword: action.payload
            }
        default: return state
    }
}