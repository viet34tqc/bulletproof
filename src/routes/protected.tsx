import loadable from '@loadable/component';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = loadable(
	() => import('@/features/Protected/ProtectedRoute')
);
const Dashboard = loadable(
	() => import('@/features/Protected/pages/Dashboard/Dashboard')
);
const Users = loadable(() => import('@/features/Protected/pages/Users/Users'));
const DiscussionsRoute = loadable(
	() => import('@/features/Protected/pages/Discussions/DiscussionsRoute')
);
const Discussions = loadable(
	() => import('@/features/Protected/pages/Discussions/pages/Discussions')
);
const SingleDiscussion = loadable(
	() => import('@/features/Protected/pages/Discussions/pages/SingleDiscussion')
);
const Profile = loadable(
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
