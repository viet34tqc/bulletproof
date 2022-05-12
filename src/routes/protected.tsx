import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = lazy(
	() => import('@/features/Protected/ProtectedRoute')
);
const Dashboard = lazy(
	() => import('@/features/Protected/pages/Dashboard/Dashboard')
);
const Users = lazy(() => import('@/features/Protected/pages/Users/Users'));
const DiscussionsRoute = lazy(
	() => import('@/features/Protected/pages/Discussions/DiscussionsRoute')
);
const Discussions = lazy(
	() => import('@/features/Protected/pages/Discussions/pages/Discussions')
);
const SingleDiscussion = lazy(
	() => import('@/features/Protected/pages/Discussions/pages/SingleDiscussion')
);
const Profile = lazy(
	() => import('@/features/Protected/pages/Profile/Profile')
);

export const protectedRoutes = [
	{
		path: '/dashboard',
		element: <ProtectedRoute />,
		children: [
			{ path: '', element: <Dashboard /> },
			{ path: 'users', element: <Users /> },
			{
				path: 'discussions',
				element: <DiscussionsRoute />,
				children: [
					{ path: '', element: <Discussions /> },
					{
						path: ':id',
						element: <SingleDiscussion />,
					},
					{ path: '*', element: <Navigate to="." /> },
				],
			},
			{ path: 'profile', element: <Profile /> },
		],
	},
];
