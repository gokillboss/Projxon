import axiosInstance from '../utils/axiosInstance';

export const fetchClients = async () => {
    const response = await axiosInstance.get('/api/clients');
    return response.data;
};

export const fetchClient = async (id) => {
    const response = await axiosInstance.get(`/api/clients/${id}`);
    return response.data;
};
