import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = lazy(() => import('@/features/Auth/AuthRoute'));
const Login = lazy(() => import('@/features/Auth/pages/Login/Login'));
const Register = lazy(() => import('@/features/Auth/pages/Register/Register'));

export const authRoutes = [
	{
		path: '/auth',
		element: <AuthRoute />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: '', element: <Login /> },
			{ path: '*', element: <Navigate to="." /> },
		],
	},
];
