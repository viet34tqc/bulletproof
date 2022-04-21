import { axiosInstance } from '@/core/axios';
import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export const registerUser = (
	data: RegisterCredentialsDTO
): Promise<UserResponse> => {
	return axiosInstance.post('/auth/register', data);
};
