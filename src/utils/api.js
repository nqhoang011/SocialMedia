import axios from '../utils/axioscustom'
export const loginApi = (email, password) => {
    return axios.post('/api/v1/auth/login', {
        email: email,
        password: password
    })
}