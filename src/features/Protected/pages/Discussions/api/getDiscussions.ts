import { axiosInstance } from '@/core/axios';
import { useQuery } from 'react-query';
import { Discussion } from '../types/discussion';
import { createDiscussion } from './createDiscussion';

export const getDiscussions = (): Promise<Discussion[]> => {
	return axiosInstance.get(`/discussions`);
};

export const useGetDiscussions = () => {
	return useQuery({
		queryKey: ['discussions'],
		queryFn: getDiscussions,
	});
};
