import Button from '@/components/Button/Button';
import { useAuth } from '@/context/AuthContext';
import { HomeIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			navigate('/dashboard');
		}
	}, [user]);

	const handleStart = () => {
		navigate('/auth/login');
	};

	return (
		<div className="grid place-items-center h-[100vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="text-center">
				<h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 ">
					Welcome to the forum
				</h1>
				<p className="mb-8">
					Here is the simplified version of the famous Bulletproof React. Go and
					check it out.
				</p>
				<div className="flex justify-center">
					<Button onClick={handleStart}>
						<HomeIcon width="18" />
						<span className="mx-2">Get started</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;
