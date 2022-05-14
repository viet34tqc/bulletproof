import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
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
		onSuccess: async () => {
			await queryClient.invalidateQueries(['comments', discussionId]);
			toast('Successfully update');
		},
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData('discussions', context.previousDiscussions);
			}
		},
	});
};
