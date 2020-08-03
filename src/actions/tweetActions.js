import Axios from "axios"
import { ApiUri, FETCH_TWEETS, FETCH_ERRORS } from "../utils/const"

export const getAllTweets = async (dispatch, source) => {
    try {
        return await Axios.get(`${ApiUri}/tweets`,{ cancelToken: source.token }).then(res => {
            if(res.status === 200) {
                dispatch({
                    type: FETCH_TWEETS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: FETCH_ERRORS,
                    payload: {status: res.status, statusText: res.statusText}
                })
            }
        })
    } catch (error) {
        Axios.isCancel(error)
    }
}