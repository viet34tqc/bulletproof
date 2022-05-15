import Button from '@/components/Button/Button';
import InputField from '@/components/Form/InputField';
import SelectField from '@/components/Form/SelectField';
import Spinner from '@/components/Spinner/Spinner';
import { useAuth } from '@/context/AuthContext';
import AuthLayout from '@/features/Auth/components/AuthLayout';
import { useTeams } from '@/features/Teams/api/getTeams';
import { Switch } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export interface RegisterValues {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	teamId: string;
}

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	teamId: yup.string().min(1),
});

const Register = () => {
	const [chooseTeam, setChooseTeam] = useState(false);
	const navigate = useNavigate();
	const { isRegistering, registerMutation } = useAuth();

	const { data: teams, isLoading: isLoadingTeams } = useTeams({
		config: {
			enabled: chooseTeam, // Only run this query if chooseTeam is available
		},
	});
	console.log('teams', teams);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: RegisterValues) => {
		registerMutation.mutate(data, {
			onSuccess: () => {
				navigate('/dashboard');
			},
			onError: (error: any) => {
				toast(error.response.data.message);
			},
		});
	};

	return (
		<AuthLayout title="Register new account">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 child:text-[14px]"
			>
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

				{chooseTeam &&
					(isLoadingTeams ? (
						<Spinner size="sm" />
					) : (
						teams && (
							<SelectField
								options={teams.map(team => {
									return {
										value: team.id,
										name: team.name,
									};
								})}
								error={errors.teamId?.message}
								registration={register('teamId')}
							></SelectField>
						)
					))}

				<Button isLoading={isRegistering} type="submit" className="w-full">
					Register
				</Button>
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
