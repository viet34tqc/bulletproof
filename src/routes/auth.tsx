import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Auth = lazy(() => import('@/features/Auth/Auth'));
const Login = lazy(() => import('@/features/Auth/pages/Login/Login'));
const Register = lazy(() => import('@/features/Auth/pages/Register/Register'));

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
