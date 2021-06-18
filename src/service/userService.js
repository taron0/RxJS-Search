import {BASE_URL} from "../constants/url";

export const getUserData = ( queryParams ) =>  fetch(`${BASE_URL}${queryParams}`).then(res => res.json());