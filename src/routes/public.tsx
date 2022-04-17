import { lazy } from 'react';

const Home = lazy(() => import('@/features/Home/Home'));

export const publicRoutes = [
	{
		path: '/',
		element: <Home />,
	},
];
