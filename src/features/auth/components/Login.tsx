import InputField from '@/components/Form/InputField';
import AuthLayout from '@/features/auth/components/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: LoginValues) => {
		console.log('data', data);
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

				<button
					type="submit"
					className="flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none bg-blue-600 text-white hover:bg-gray-50:text-blue-600 py-2 px-6 text-md w-full"
				>
					<span className="mx-2">Log in</span>
				</button>
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
