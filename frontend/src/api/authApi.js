import axiosClient from './axiosClient';

export const login = (data) => axiosClient.post('/auth/login', data);
export const logout = () => axiosClient.post('/auth/logout');
export const getCurrentUser = () => axiosClient.get('/auth/me');
