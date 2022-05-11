import { lazy } from 'react';

const Protected = lazy(() => import('@/features/Protected/Protected'));
const Dashboard = lazy(
	() => import('@/features/Protected/pages/Dashboard/Dashboard')
);
const Users = lazy(() => import('@/features/Protected/pages/Users/Users'));
const Discussions = lazy(
	() => import('@/features/Protected/pages/Discussions/Discussions')
);
const Profile = lazy(
	() => import('@/features/Protected/pages/Profile/Profile')
);

export const protectedRoutes = [
	{
		path: '/dashboard',
		element: <Protected />,
		children: [
			{ path: '', element: <Dashboard /> },
			{ path: 'users', element: <Users /> },
			{ path: 'discussions', element: <Discussions /> },
			{ path: 'profile', element: <Profile /> },
		],
	},
];
