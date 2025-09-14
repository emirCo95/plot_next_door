// src/api/auth.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api/v1', // adjust to your backend URL
  withCredentials: true, // IMPORTANT for session cookies
});

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'customer' | 'farmer';
}

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  role: string;
}): Promise<User> => {
  const res = await api.post('/auth/register', data);
  return res.data.user;
};

export const login = async (data: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await api.post('/auth/login', data);
  return res.data.user;
};

export const verify = async (): Promise<User> => {
  const res = await api.get('/auth/me');
  return res.data.user;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};
