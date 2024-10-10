import axios from 'axios';

// # CREATE A .env file and fill in the '#' with username and password
// REACT_APP_API_USERNAME=#######
// REACT_APP_API_PASSWORD=#######

const API_URL = 'https://real-smash.localsite.io/wp-json/wp/v2';

const api = axios.create({
    baseURL: API_URL,
    auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD
    }
});


// get posts
export const getPosts = async () => {
    try {
        const response = await api.get(`/posts?_embed`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// get individual post
export const getPost = async (id) => {
    try {
        const response = await api.get(`/posts/${id}?_embed`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
