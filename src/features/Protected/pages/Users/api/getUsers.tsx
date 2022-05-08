import { axiosInstance } from '@/core/axios';
import { User } from '@/features/Protected/types/User';
import { useQuery } from 'react-query';

export const getUsers = (): Promise<User[]> => axiosInstance.get(`/users`);

export const useUsers = () =>
	useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	});
