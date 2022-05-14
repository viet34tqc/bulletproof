import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { Comment } from '../types/comment';

export type CreateCommentDTO = {
	body: string;
	discussionId: string;
};

export const createComment = (data: CreateCommentDTO): Promise<Comment> => {
	return axiosInstance.post('/comments', data);
};

export const useCreateComment = (discussionId: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createComment,
		onSuccess: () => {
			queryClient.invalidateQueries(['comments', discussionId]);
		},
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData('discussions', context.previousDiscussions);
			}
		},
	});
};
