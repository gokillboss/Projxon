const axios = require('axios');

const api = axios.create({
    baseURL: `${process.env.WORDPRESS_API_URL.replace('/wp/v2', '')}/projxon/v1`,
    auth: {
      username: process.env.WORDPRESS_API_USERNAME,
      password: process.env.WORDPRESS_API_PASSWORD
  }
});

module.exports = {
    getClients: async (req, res) => {
        try {
            const response = await api.get('/clients');  
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
            res.status(error.response?.status || 500).json({
                message: 'Error fetching clients',
                error: error.message,
            });
        }
    },

    getClient: async (req, res) => {
        try {
            const clientId = req.params.id;
            const response = await api.get(`/clients`);  
            const client = response.data.find(client => client.id === clientId);

            if (!client) {
                return res.status(404).json({ message: 'Client not found' });
            }

            res.status(200).json(client);
        } catch (error) {
            console.error('Error fetching client:', error);
            res.status(error.response?.status || 500).json({
                message: 'Error fetching client',
                error: error.message,
            });
        }
    }
};
