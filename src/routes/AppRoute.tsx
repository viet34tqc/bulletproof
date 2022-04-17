import { useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const AppRoute = () => {
	let element = useRoutes([...authRoutes, ...protectedRoutes, ...publicRoutes]);
	return element;
};

export default AppRoute;
