import { axiosInstance } from '@/core/axios';
import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
	return axiosInstance.get('/auth/me');
};
