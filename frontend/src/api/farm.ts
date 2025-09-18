// src/api/farm.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api/v1', // adjust to your backend URL
  withCredentials: true, // IMPORTANT for session cookies
});

export interface Farm {
  _id: string;
  owner: string;
  name: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  plots: [];
  image: string;
  prefferedCrops: string[];
  maxPlots: number;
  assignedPlots: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchFarmDetails = async (): Promise<Farm> => {
  const res = await api.get('/farm');
  return res.data;
};
