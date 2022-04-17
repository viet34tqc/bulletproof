import { lazy } from 'react';

const Auth = lazy(() => import('@/features/auth/Auth'));
const Login = lazy(() => import('@/features/auth/components/Login'));
const Register = lazy(() => import('@/features/auth/components/Register'));

export const authRoutes = [
	{
		path: '/auth',
		element: <Auth />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
		],
	},
];
