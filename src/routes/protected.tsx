import { lazy } from 'react';

const Dashboard = lazy(() => import('@/features/Dashboard/Dashboard'));
const Users = lazy(() => import('@/features/Users/Users'));
const Profile = lazy(() => import('@/features/Profile/Profile'));

export const protectedRoutes = [
	{
		path: '/dashboard',
		element: <Dashboard />,
		children: [
			{ path: 'users', element: <Users /> },
			{ path: 'profile', element: <Profile /> },
		],
	},
];
