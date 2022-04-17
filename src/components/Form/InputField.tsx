import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
	label: string;
	type?: 'text' | 'email' | 'password';
	className?: string;
	registration: Partial<UseFormRegisterReturn>;
}

const InputField = ({
	type,
	label,
	className,
	registration,
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
		</div>
	);
};

export default InputField;
