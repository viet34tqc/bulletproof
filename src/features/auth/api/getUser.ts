import { axiosInstance } from '@/core/axios';
import { AuthUser } from '../types';

export const getCurrentUser = (): Promise<AuthUser> => {
	return axiosInstance.get('/auth/me');
};
