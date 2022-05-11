import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { Discussion } from '../types/discussion';

export type CreateDiscussionDTO = {
	title: string;
	body: string;
};

export const createDiscussion = (
	data: CreateDiscussionDTO
): Promise<Discussion> => {
	return axiosInstance.post(`/discussions`, data);
};

export const useCreateDiscussion = () => {
    const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createDiscussion,
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData('discussions', context.previousDiscussions);
			}
		},
	});
};
