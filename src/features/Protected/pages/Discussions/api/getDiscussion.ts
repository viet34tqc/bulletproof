import { axiosInstance } from '@/core/axios';
import { useQuery } from 'react-query';
import { discussionKeys } from '../queryKeys';
import { Discussion } from '../types/discussion';

export const getDiscussion = (id: string): Promise<Discussion> => {
	return axiosInstance.get(`/discussions/${id}`);
};

export const useGetDiscussion = (id: string) => {
	return useQuery({
		queryKey: discussionKeys.detail(id),
		queryFn: () => getDiscussion(id),
	});
};
