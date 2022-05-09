import { axiosInstance } from '@/core/axios';
import { useQuery } from 'react-query';
import { Team } from '../types/Team';

export const getTeams = (): Promise<Team[]> => {
	return axiosInstance.get('/teams');
};

export const useTeams = ({ config = {} }) =>
	useQuery({
		...config,
		queryKey: ['teams'],
		queryFn: getTeams,
	});
