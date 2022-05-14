import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const deleteComment = (commentId: string) => {
	return axiosInstance.delete(`/comments/${commentId}`);
};

export const useDeleteComment = (discussionId: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteComment,
		onError: (_, __, context: any) => {
			if (context?.previousComment) {
				queryClient.setQueryData('comments', context.previousComment);
			}
		},
		onSuccess: async () => {
			// Wait for query to refetch before displaying toast.
			await queryClient.invalidateQueries(['comments', discussionId]);
			toast('Delete Comment successfully');
		},
	});
};
