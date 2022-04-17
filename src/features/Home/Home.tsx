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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							></path>
						</svg>
						<span className="mx-2">Get started</span>{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
