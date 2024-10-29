
import axios from 'axios';

export const fetchBlogs = async () => {
  const response = await axios.get('/api/blogs');
  return response.data;
};

export const fetchBlog = async (id) => {
  const response = await axios.get(`/api/blogs/${id}`);
  return response.data[0];
};