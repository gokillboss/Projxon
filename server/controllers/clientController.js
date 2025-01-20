const axios = require('axios');

const api = axios.create({
    baseURL: `${process.env.WORDPRESS_API_URL.replace('/wp/v2', '')}/projxon/v1`,
    headers: {
        'Authorization': `Basic ${Buffer.from(
            `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`
        ).toString('base64')}`,
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
            const newClient = req.body;
            const response = await api.post('/clients', newClient);
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
            const clientId = req.params.id;
            console.log(`Attempting to delete client with ID: ${clientId}`);

            const response = await axios.delete(
                `${process.env.WORDPRESS_API_URL.replace('/wp/v2', '')}/projxon/v1/clients/${clientId}`,
                {
                    headers: {
                        'Authorization': `Basic ${Buffer.from(
                            `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`
                        ).toString('base64')}`,
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
