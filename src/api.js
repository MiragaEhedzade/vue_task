import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Adjust the URL based on your db.json server
});

export const getUsers = () => {
  return apiClient.get('/users');
};