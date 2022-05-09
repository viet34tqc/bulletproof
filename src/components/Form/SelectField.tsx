import clsx from 'clsx';
import { SelectHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	options: { value: string; name: string }[];
	className?: string;
	error?: string;
	registration: Partial<UseFormRegisterReturn>;
}

const SelectField = ({
	label,
	options,
	className,
	registration,
	error,
}: SelectFieldProps) => {
	return (
		<div>
			{label && (
				<label className="mb-1 block text-sm text-gray-700 font-medium">
					{label}
				</label>
			)}
			<select
				className={clsx(
					'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
					className
				)}
				{...registration}
			>
				{options.map(option => (
					<option value={option.value}>{option.name}</option>
				))}
			</select>
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

export default SelectField;
