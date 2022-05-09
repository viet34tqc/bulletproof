import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Auth = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			navigate('/dashboard');
		}
	}, [user]);
	return <Outlet />;
};

export default Auth;
