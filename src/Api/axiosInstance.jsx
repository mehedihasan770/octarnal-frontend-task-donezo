import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://task-api-eight-flax.vercel.app',
});