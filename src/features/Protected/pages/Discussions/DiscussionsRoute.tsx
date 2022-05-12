import { useAuth } from '@/context/AuthContext';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const DiscussionsRoute = () => {
	return <Outlet />;
};

export default DiscussionsRoute;
