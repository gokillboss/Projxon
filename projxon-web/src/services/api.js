import axios from 'axios';

const API_URL = 'http://projxon.local/wp-json/wp/v2/';

const api = axios.create({
    baseURL: API_URL
});


//get post
export const getPosts = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
