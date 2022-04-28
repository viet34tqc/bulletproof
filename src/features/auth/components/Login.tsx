import Button from '@/components/Button/Button';
import InputField from '@/components/Form/InputField';
import { useAuth } from '@/context/AuthContext';
import AuthLayout from '@/features/auth/components/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export interface LoginValues {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const Login = () => {
	const navigate = useNavigate();
	const { loginMutation, isLoggingIn } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: LoginValues) => {
		loginMutation.mutate(data, {
			onSuccess: () => {
				navigate('/dashboard');
			},
			onError: (error: any) => {
				toast(error.response.data.message);
			},
		});
	};

	return (
		<AuthLayout title="Login to your account">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<InputField
					type="email"
					label="Email"
					error={errors.email?.message}
					registration={register('email')}
				/>
				<InputField
					type="password"
					label="Password"
					registration={register('password')}
					error={errors.password?.message}
				/>

				<Button isLoading={isLoggingIn} type="submit" className="w-full">
					Log in
				</Button>
			</form>

			<div className="flex justify-end mt-4">
				<Link
					to="../register"
					className="font-medium text-sm text-blue-600 hover:text-blue-500"
				>
					Register
				</Link>
			</div>
		</AuthLayout>
	);
};

export default Login;
