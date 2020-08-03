import axios from 'axios';

export const setRequestHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token
}

export const removeRequestHeader = () => {
    delete axios.defaults.headers.common["Authorization"];
}