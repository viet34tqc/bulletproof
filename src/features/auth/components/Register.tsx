import InputField from '@/components/Form/InputField';
import AuthLayout from '@/features/auth/components/AuthLayout';
import { Switch } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

export interface RegisterValues {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
});

const Register = () => {
	const [chooseTeam, setChooseTeam] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: RegisterValues) => {
		console.log('data', data);
	};

	return (
		<AuthLayout title="Register new account">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<InputField
					type="email"
					label="Email"
					error={errors.email?.message}
					registration={register('email')}
				/>
				<InputField
					type="text"
					label="First Name"
					registration={register('firstName')}
					error={errors.firstName?.message}
				/>
				<InputField
					type="text"
					label="Last Name"
					registration={register('lastName')}
					error={errors.lastName?.message}
				/>
				<InputField
					type="password"
					label="Password"
					registration={register('password')}
					error={errors.password?.message}
				/>

				<Switch.Group>
					<div className="flex items-center">
						<Switch
							checked={chooseTeam}
							onChange={setChooseTeam}
							className={`${
								chooseTeam ? 'bg-blue-600' : 'bg-gray-200'
							} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
						>
							<span
								className={`${
									chooseTeam ? 'translate-x-6' : 'translate-x-1'
								} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
							/>
						</Switch>
						<Switch.Label className="ml-4">Join Existing Team</Switch.Label>
					</div>
				</Switch.Group>

				<button
					type="submit"
					className="flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none bg-blue-600 text-white hover:bg-gray-50:text-blue-600 py-2 px-6 text-md w-full"
				>
					<span className="mx-2">Log in</span>
				</button>
			</form>

			<div className="flex justify-end mt-4">
				<Link
					to="../login"
					className="font-medium text-sm text-blue-600 hover:text-blue-500"
				>
					Login
				</Link>
			</div>
		</AuthLayout>
	);
};

export default Register;
