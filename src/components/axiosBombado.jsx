import axios from "axios";

const AxiosInstance = axios.create({
    baseUrl: 'http://localhost:8080',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
    }
})

export default AxiosInstance;