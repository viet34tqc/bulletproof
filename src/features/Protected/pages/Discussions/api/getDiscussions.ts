import { axiosInstance } from '@/core/axios';
import { useQuery } from 'react-query';
import { discussionKeys } from '../queryKeys';
import { Discussion } from '../types/discussion';

export const getDiscussions = (): Promise<Discussion[]> => {
	return axiosInstance.get(`/discussions`);
};

export const useGetDiscussions = () => {
	return useQuery({
		queryKey: discussionKeys.all(),
		queryFn: getDiscussions,
		staleTime: Infinity,
	});
};
