import axios from "axios";
const baseUrl = 'http://racingboy560-26219.portmap.host:26219';
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});
instance.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instance;