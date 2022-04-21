import { axiosInstance } from '@/core/axios';
import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
	email: string;
	password: string;
};

export const loginUser = (data: LoginCredentialsDTO): Promise<UserResponse> => {
	return axiosInstance.post('/auth/login', data);
};
