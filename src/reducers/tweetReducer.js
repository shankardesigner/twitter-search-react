import { FETCH_TWEETS, FETCH_ERRORS } from "../utils/const"

export const twitterInitialState = {
    loading: true,
    tweets: [],
    error: []
}

export const tweetReducer = (state = twitterInitialState, action) => {
    switch (action.type) {
        case FETCH_TWEETS:
            return {
                loading: false,
                error: [],
                tweets: action.payload
            }
            
        case FETCH_ERRORS:
            return {
                loading: false,
                tweets: [],
                error: action.payload
            }
        default:
            return state
    }
}