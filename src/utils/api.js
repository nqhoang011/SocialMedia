import axios from '../utils/axioscustom'
export const loginApi = (email, password) => {
    return axios.post('/api/v1/auth/login', {
        email: email,
        password: password
    })
}

export const getFollowersApi = (id) => {
    return axios.get(`/api/v1/following/get-listUserIsFollowing/${id}`);
}

export const getFollowingsApi = (id) => {
    return axios.get(`/api/v1/following/get-listUserIsFollowed/${id}`);
}

export const getCountFollowersApi = (id) => {
    return axios.get(`/api/v1/following/get-following/${id}`);
}

export const getCountFollowingsApi = (id) => {
    return axios.get(`/api/v1/following/get-userid/${id}`);
}

export const getListPostsApi = (id) => {
    return axios.get(`/api/v1/posts/get-all/post?userid=${id}`);
}

export const getUserStoriesApi = (id) => {
    return axios.get(`/api/v1/stories/get-all?userid=${id}`);
}

export const getFeedApi = () => {
    return axios.get(`/api/v1/posts/get-other-post?userid=${localStorage.getItem('id')}`);
}

export const getResultSearchApi = (text) => {
    return axios.get(`/api/v1/users/looking-for?keyword=${text}`);
}

export const getUserProfileApi = (id) => {
    return axios.get(`/api/v1/find/${id}`);
}

export const createPostApi = (
    userId,
    content,
    images,
    status = 'Public',
    type = "POST",
    createdAt,
    modifiedAt = null,
    location = null
) => {
    // console.log(images);
    return axios.post('/api/v1/posts/create', {
        userid: userId,
        content: content,
        status: 'Public',
        src: null,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        images: images,
        type: type,
        location: location
    })
}
export const createVideoApi = (
    userId,
    content,
    images = null,
    status = 'Public',
    src,
    type = "SHORTCUT",
    createdAt,
    modifiedAt = null,
    location = null
) => {
    // console.log(images);
    return axios.post('/api/v1/posts/create', {
        userid: userId,
        content: content,
        status: 'Public',
        src: src,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        images: null,
        type: type,
        location: location
    })
}