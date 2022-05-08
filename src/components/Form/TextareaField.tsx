import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	className?: string;
	error?: string;
	registration: Partial<UseFormRegisterReturn>;
}

const TextareaField = ({
	label,
	className,
	registration,
	error,
}: TextareaFieldProps) => {
	return (
		<div>
			<label className="mb-1 block text-sm text-gray-700 font-medium">
				{label}
			</label>
			<textarea
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

export default TextareaField;
