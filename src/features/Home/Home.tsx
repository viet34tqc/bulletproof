import { HomeIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const handleStart = () => {
		navigate('/auth/login');
	};

	return (
		<div className="grid place-items-center h-[100vh] bg-gray-50 py-12 sm:px-6 lg:px-8">
			<div className="text-center">
				<h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 ">
					Welcome to the forum
				</h1>
				<p className="mb-8">
					Here is the simplified version of the famous Bulletproof React. Go and
					check it out.
				</p>
				<div className="flex justify-center">
					<button
						type="button"
						className="flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none bg-blue-600 text-white hover:bg-gray-50:text-blue-600 py-2 px-6 text-md"
						onClick={handleStart}
					>
						<HomeIcon width="18" />
						<span className="mx-2">Get started</span>{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
