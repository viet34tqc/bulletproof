import { useAuth } from '@/context/AuthContext';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

type Props = {};

const Dashboard = (props: Props) => {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) {
			navigate('/auth/login');
		}
	}, [user]);
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Dashboard;
