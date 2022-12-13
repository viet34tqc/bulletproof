import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { discussionKeys } from '../queryKeys';
import { Discussion } from '../types/discussion';

export type updateDiscussionDTO = {
	data: {
		title: string;
		body: string;
	};
	id: string;
};

export const updateDiscussion = ({
	data,
	id,
}: updateDiscussionDTO): Promise<Discussion> => {
	return axiosInstance.patch(`/discussions/${id}`, data);
};

export const useUpdateDiscussion = (id: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateDiscussion,
		onSuccess: data => {
			queryClient.setQueryData(discussionKeys.detail(id), data);
		},
		onSettled: (_, error) => {
			if (!error) {
				queryClient.invalidateQueries(discussionKeys.detail(id));
			}
		},
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData(
					discussionKeys.detail(id),
					context.previousDiscussions
				);
			}
		},
	});
};
