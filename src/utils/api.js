import axios from '../utils/axioscustom'
export const loginApi = (email, password) => {
    return axios.post('/api/v1/auth/login', {
        email: email,
        password: password
    })
}

export const getFollowersApi = () => {
    return axios.get(`/api/v1/following/get-listUserIsFollowing/${localStorage.getItem('id')}`);
}

export const getFollowingsApi = () => {
    return axios.get(`/api/v1/following/get-listUserIsFollowed/${localStorage.getItem('id')}`);
}

export const getCountFollowersApi = () => {
    return axios.get(`/api/v1/following/get-following/${localStorage.getItem('id')}`);
}

export const getCountFollowingsApi = () => {
    return axios.get(`/api/v1/following/get-userid/${localStorage.getItem('id')}`);
}

export const getListPostsApi = () => {
    return axios.get(`/api/v1/posts/get-all/post?userid=${localStorage.getItem('id')}`);
}

export const getUserStoriesApi = () => {
    return axios.get(`/api/v1/stories/get-all?userid=${localStorage.getItem('id')}`);
}

export const getFeedApi = () => {
    return axios.get(`/api/v1/posts/get-other-post?userid=${localStorage.getItem('id')}`);
}