const axios = require('axios')

const api = axios.create({
    baseURL: process.env.WORDPRESS_API_URL,
    auth: {
        username: process.env.WORDPRESS_API_USERNAME,
        password: process.env.WORDPRESS_API_PASSWORD
    }
});

module.exports = {

    getBlogs: async (req, res) => {
        try {
            const allPosts = [];
            let page = 1;
            let hasMorePosts = true;
    
            while (hasMorePosts) {
                const response = await api.get(`/posts?_embed`, {
                    params: {
                        page,       // Specify the current page
                        per_page: 10, // Number of posts per page
                    },
                });
                allPosts.push(...response.data); // Append posts to the result array
    
                // If the number of posts is less than the per_page limit, we've reached the end
                if (response.data.length < 10) {
                    hasMorePosts = false;
                } else {
                    page++; // Move to the next page
                }
            }
    
            res.status(200).json(allPosts); 
        } catch (error) {
            res.status(error.response?.status || 500).json({
                message: 'Error fetching blogs',
                error: error.message,
            });
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


