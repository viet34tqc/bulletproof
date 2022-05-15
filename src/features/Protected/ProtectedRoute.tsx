import { useAuth } from '@/context/AuthContext';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

const ProtectedRoute = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) {
			navigate('/auth/login');
		}
	}, [user, navigate]);

	if (!user) return null;
	
	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	);
};

export default ProtectedRoute;
