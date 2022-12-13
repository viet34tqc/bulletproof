import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { discussionKeys } from '../queryKeys';

export const deleteDiscussion = (id: string) => {
	return axiosInstance.delete(`/discussions/${id}`);
};

export const useDeleteDiscussion = (id: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteDiscussion,
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData(
					discussionKeys.all(),
					context.previousDiscussions
				);
			}
		},
	});
};
