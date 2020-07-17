import axios from 'axios';
import {getToken} from "../utils/getToken.js";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers:{
            Authorization: token,
        },
    });
};