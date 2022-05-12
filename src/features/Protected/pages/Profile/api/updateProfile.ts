import { axiosInstance } from '@/core/axios';
import { useMutation, useQueryClient } from 'react-query';
export type UpdateProfileDTO = {
	email: string;
	firstName: string;
	lastName: string;
	bio: string;
};
export const updateProfile = (data: UpdateProfileDTO) => {
	return axiosInstance.patch(`/users/profile`, data);
};

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateProfile,
		onSuccess() {
			queryClient.invalidateQueries('auth-user');
		},
	});
};
