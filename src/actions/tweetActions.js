import Axios from "axios"
import { ApiUri, FETCH_TWEETS, FETCH_ERRORS } from "../utils/const"

export const getAllTweets = async (dispatch) => {
    try {
        return await Axios.get(ApiUri).then(res => {
            dispatch({
                type: FETCH_TWEETS,
                payload: res.data
            })
        })
    } catch (error) {
        dispatch({
            type: FETCH_ERRORS,
            payload: error.response.data
        })
    }
}