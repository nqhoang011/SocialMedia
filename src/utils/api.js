import axios from '../utils/axioscustom'
export const loginApi = (email, password) => {
    axios.post('/api/v1/auth/login', {
        email: 'racingboy560@gmail.com',
        password: '12345678'
    })
}