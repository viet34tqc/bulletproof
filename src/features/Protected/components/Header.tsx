import UserNavigation from './UserNavigation';

const Header = () => {
	return (
		<div className="relative z-10 bg-white shadow px-6 py-3 flex justify-between md:justify-end">
			<UserNavigation />
		</div>
	);
};

export default Header;
