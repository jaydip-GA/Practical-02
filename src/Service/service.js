

import axios from "axios";

const { REACT_APP_BASEURL, REACT_APP_API_KEY } = process.env;

export const getAllAtroidData = () => {
    return axios.get(`${REACT_APP_BASEURL}browse?page=0&size=20&api_key=${REACT_APP_API_KEY}`);
}

export const getAtroidData = id => {
    return axios.get(`${REACT_APP_BASEURL}${id}?api_key=${REACT_APP_API_KEY}`);
}