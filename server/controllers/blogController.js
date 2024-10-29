const axios = require('axios')

const api = axios.create({
    baseURL: process.env.WORDPRESS_API_URL,
    auth: {
        username: process.env.WORDPRESS_API_USERNAME,
        password: process.env.WORDPRESS_API_PASSWORD
    }
});

module.exports = {

    // get all blogs
    getBlogs: async (req, res) => {
        try {
            const response = await api.get(`/posts?_embed`);
            res.status(200).json(response.data) //send it back as json
        } catch (error) {
            res.status(error.response?.status || 500).json({ message: 'Error fetching blogs', error: error.message })
        }
        
    },
  
    // get a single blog
    getBlog: async (req, res) => {
        try {
            const blogId = req.params.id
            const response = await api.get(`/posts?_embed&slug=${blogId}`);    
            res.status(200).json(response.data) //send it back as json
        } catch (error) {
            res.status(error.response?.status || 500).json({ message: 'Error fetching blog', error: error.message })
        }
    },

}


