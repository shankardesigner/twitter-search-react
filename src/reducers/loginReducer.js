import { FETCH_ERRORS, LOGIN_ACCOUNT } from "../utils/const"

export const loginInitialState = {
    loading: true,
    user: [],
    error: []
}

export const loginReducer = ( state = loginInitialState, action ) => {
    switch (action.type) {
        case LOGIN_ACCOUNT:
            return {
                loading: false,
                user: action.payload,
                error: []
            }
            
        case FETCH_ERRORS:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}