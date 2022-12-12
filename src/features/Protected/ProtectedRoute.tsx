import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

const ProtectedRoute = () => {
	const { user } = useAuth();

	if (!user) return <Navigate to="/auth/login" replace />;

	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	);
};

export default ProtectedRoute;
