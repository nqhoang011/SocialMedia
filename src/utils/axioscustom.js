import axios from "axios";
const baseUrl = 'http://0.tcp.ap.ngrok.io:17322';
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});
instance.interceptors.request.use(function (config) {
    console.log(config)
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instance;