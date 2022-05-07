import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	type?: 'text' | 'email' | 'password';
	className?: string;
	error?: string;
	registration: Partial<UseFormRegisterReturn>;
}

const InputField = ({
	type,
	label,
	className,
	registration,
	error,
}: InputFieldProps) => {
	return (
		<div>
			<label className="mb-1 block text-sm text-gray-700 font-medium">
				{label}
			</label>
			<input
				type={type}
				className={clsx(
					'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400',
					className
				)}
				{...registration}
			/>
			{error && (
				<div
					role="alert"
					aria-label={error}
					className="text-sm font-semibold text-red-500"
				>
					{error}
				</div>
			)}
		</div>
	);
};

export default InputField;
