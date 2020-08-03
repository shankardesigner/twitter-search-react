import { REGISTER_ACCOUNT, FETCH_ERRORS } from "../utils/const"

export const registerInitialState = {
    loading: true,
    message: [],
    error: []
}

export const registerReducer = ( state = registerInitialState, action ) => {
    switch (action.type) {
        case REGISTER_ACCOUNT:
            return {
                loading: false,
                message: action.payload,
                error: []
            }
            
        case FETCH_ERRORS:
            return {
                loading: false,
                message: [],
                error: action.payload
            }
        default:
            return state
    }
}