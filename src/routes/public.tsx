import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('@/features/Home/Home'));

export const publicRoutes = [
	{
		path: '/',
		element: <Home />,
		children: [{ path: '*', element: <Navigate to="." /> }],
	},
];
