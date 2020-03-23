import axios from "axios";
import https from 'https'
const config = {
    api: {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
        crossdomain: true,
        baseURL: process.env.REACT_APP_BASE_URL + "/",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_TOKEN

        }
    }

}
export const api = axios.create({ ...config.api })

export { playlistApi } from './playlistApi';


