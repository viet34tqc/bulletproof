import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
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

export const useUpdateDiscussion = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateDiscussion,
		onSuccess: data => {
			queryClient.invalidateQueries(['discussions', data.id]);
		},
		onError: (_, __, context: any) => {
			if (context?.previousDiscussions) {
				queryClient.setQueryData('discussions', context.previousDiscussions);
			}
		},
	});
};
