import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const deleteUser = (userId: string) =>
	axiosInstance.delete(`/users/${userId}`);

export const useDeleteUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteUser,
		onSuccess: async () => {
			// When we invalidate the query users
			// The component that uses that query will be re-rendered
			// That leads to the ConfirmDialog unmount
			await queryClient.invalidateQueries('users');
			toast('Delete user successfully');
		},
		onError: (_, __, context: any) => {
			if (context?.previousUsers) {
				queryClient.setQueryData('users', context.previousUsers);
			}
		},
	});
};
