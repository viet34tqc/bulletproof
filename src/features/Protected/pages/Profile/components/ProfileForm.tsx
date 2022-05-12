import Button from '@/components/Button/Button';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextareaField';
import { useAuth } from '@/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useUpdateProfile } from '../api/updateProfile';

export interface ProfileValues {
	firstName: string;
	lastName: string;
	email: string;
	bio: string;
}

const schema = yup.object({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	email: yup.string().email().required(),
	bio: yup.string(),
});

const ProfileForm = ({
	setIsOpen,
}: {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { user } = useAuth();
	const updateProfile = useUpdateProfile();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
			bio: user?.bio,
		},
	});

	const onSubmit = async (data: ProfileValues) => {
		updateProfile.mutate(data, {
			onSuccess() {
				setIsOpen && setIsOpen(false);
				toast('Successfully update');
			},
			onError: (error: any) => {
				toast(error.response.data.message);
			},
		});
	};
	return (
		<form
			className="child:mt-8 child:text-sm"
			onSubmit={handleSubmit(onSubmit)}
		>
			<InputField
				label="First Name"
				error={errors?.firstName?.message}
				registration={register('firstName')}
			/>
			<InputField
				label="Last Name"
				error={errors?.lastName?.message}
				registration={register('lastName')}
			/>
			<InputField
				label="Email"
				error={errors?.email?.message}
				registration={register('email')}
			/>
			<TextareaField
				label="Bio"
				error={errors?.bio?.message}
				registration={register('bio')}
			/>
			<Button type="submit" size="sm" isLoading={updateProfile.isLoading}>
				Update
			</Button>
		</form>
	);
};

export default ProfileForm;
