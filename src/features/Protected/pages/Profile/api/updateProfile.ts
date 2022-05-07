import { useAuth } from '@/context/AuthContext';
import { axiosInstance } from '@/core/axios';
import { useMutation } from 'react-query';
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
	const { refetchUser } = useAuth();

	return useMutation({
		mutationFn: updateProfile,
		onSuccess() {
			refetchUser();
		},
	});
};
