const axios = require("axios");

const WORDPRESS_API_URL = process.env.WORDPRESS_JWT_URL || "http://projxon.local/wp-json";

module.exports = {
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            const response = await axios.post(`${WORDPRESS_API_URL}/jwt-auth/v1/token`, {
                username,
                password,
            });

            if (response.data && response.data.token) {
                res.json({ 
                    token: response.data.token, 
                    user: response.data 
                });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } catch (error) {
            console.error("Error logging in:", error);
            res.status(401).json({ message: "Authentication failed" });
        }
    }
};
