import Axios from "axios"
import { ApiUri, REGISTER_ACCOUNT, FETCH_ERRORS, LOGIN_ACCOUNT } from "../utils/const"

export const registerAccount = async (dispatch, user) => {
    try {
        return await Axios.post(`${ApiUri}/users/register`, user).then(res => {
            if(res.status === 201) {
                dispatch({
                    type: REGISTER_ACCOUNT,
                    payload: {status: res.status, statusText: res.data}
                })
            } 
            else {
                dispatch({
                    type: FETCH_ERRORS,
                    payload: {status: res.status, statusText: res.statusText}
                })
            }
        })
    } catch (error) {
        dispatch({
            type: FETCH_ERRORS,
            payload: {status: error.response.status, statusText: error.response.statusText}
        })
    }
}

export const getLogin = async (dispatch, user) => {
    try {
        return await Axios.post(`${ApiUri}/users/login`, user).then(res => {
            if(res.status === 200) {
                dispatch({
                    type: LOGIN_ACCOUNT,
                    payload: {status: res.status, statusText: res.data}
                })
            } else {
                dispatch({
                    type: FETCH_ERRORS,
                    payload: {status: res.status, statusText: res.statusText}
                })
            }
        })
    } catch (error) {
        dispatch({
            type: FETCH_ERRORS,
            payload: {status: error.response.status, statusText: error.response.statusText}
        })
    }
}