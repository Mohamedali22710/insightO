import api from '@/shared/api/axiosApi';
import { type LoginPayload, type AuthResponse } from '../types';

export const loginUser = async (credentials: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData: any) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};