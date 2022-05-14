import { axiosInstance } from '@/core/axios';
import { useQuery } from 'react-query';
import { Comment } from '../types/comment';

export const getComments = (discussionId: string): Promise<Comment[]> => {
	return axiosInstance.get(`/comments`, {
		params: {
			discussionId,
		},
	});
};

export const useGetComments = (discussionId: string) => {
	return useQuery({
		queryKey: ['comments', discussionId],
		queryFn: () => getComments(discussionId),
	});
};
