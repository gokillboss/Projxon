const axios = require('axios');

const WORDPRESS_CUSTOM_API_URL = process.env.WORDPRESS_CUSTOM_API_URL

const api = axios.create({
    baseURL: WORDPRESS_CUSTOM_API_URL,
    headers: {
        'Content-Type': 'application/json'
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
    },
    addClient: async (req, res) => {
        try {
            const token = req.headers.authorization; 

            if (!token) {
                return res.status(401).json({ message: "Unauthorized - No token provided" });
            }

            const newClient = req.body;
            const response = await axios.post(
                `${WORDPRESS_CUSTOM_API_URL}/clients`,
                newClient,
                {
                    headers: {
                        'Authorization': token, 
                        'Content-Type': 'application/json'
                    }
                }
            );

            res.status(201).json(response.data);
        } catch (error) {
            console.error('Error adding client:', error.response?.data || error.message);
            res.status(error.response?.status || 500).json({
                message: 'Error adding client',
                error: error.response?.data || error.message,
            });
        }
    },
    deleteClient: async (req, res) => {
        try {
            const token = req.headers.authorization; 

            if (!token) {
                return res.status(401).json({ message: "Unauthorized - No token provided" });
            }

            const clientId = req.params.id;
            console.log(`Attempting to delete client with ID: ${clientId}`);

            const response = await axios.delete(
                `${WORDPRESS_CUSTOM_API_URL}/clients/${clientId}`,
                {
                    headers: {
                        'Authorization': token, 
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Delete response:', response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error deleting client:', error.response?.data || error.message);
            res.status(error.response?.status || 500).json({
                message: 'Error deleting client',
                error: error.response?.data || error.message,
            });
        }
    } 
};
