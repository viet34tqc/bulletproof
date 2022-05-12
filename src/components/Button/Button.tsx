import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import Spinner from '../Spinner/Spinner';

const variants = {
	primary: 'bg-blue-600 text-white hover:bg-gray-50:text-blue-600',
	inverse: 'bg-white text-blue-600 hover:bg-blue-600:text-white',
	danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
};

const sizes = {
	sm: 'py-2 px-4 text-sm',
	md: 'py-2 px-6 text-md',
	lg: 'py-3 px-8 text-lg',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	isLoading?: boolean;
};

const Button = ({
	className = '',
	variant = 'primary',
	size = 'md',
	type = 'button',
	isLoading = false,
	...props // Other attributes of HTML Button will be shown if they are used.
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={clsx(
				'flex justify-center items-center gap-2 border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none',
				variants[variant],
				sizes[size],
				className
			)}
			disabled={isLoading}
			{...props}
		>
			{isLoading && <Spinner size="sm" className="text-current" />}
			{props.children}
		</button>
	);
};

export default Button;
