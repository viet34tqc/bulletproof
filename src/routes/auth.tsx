import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

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
			{ path: '', element: <Login /> },
			{ path: '*', element: <Navigate to="." /> },
		],
	},
];
