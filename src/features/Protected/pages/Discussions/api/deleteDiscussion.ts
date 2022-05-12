import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';

export const deleteDiscussion = (id: string) => {
	return axiosInstance.delete(`/discussions/${id}`);
};

export const useDeleteDiscussion = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteDiscussion,
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData('discussions', context.previousDiscussions);
			}
		},
        onSuccess: () => {
            queryClient.invalidateQueries('discussions')
        }
	});
};
