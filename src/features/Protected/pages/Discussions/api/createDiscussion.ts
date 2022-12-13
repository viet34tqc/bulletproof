import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { discussionKeys } from '../queryKeys';
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

// Demo of optimistic update.
export const useCreateDiscussion = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createDiscussion,
		onSuccess: data => {
			queryClient.setQueryData(discussionKeys.all(), (prev: any) => [
				...prev,
				data,
			]);
		},
		onSettled: (_, error) => {
			if (!error) {
				queryClient.invalidateQueries(discussionKeys.all());
			}
		},
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
