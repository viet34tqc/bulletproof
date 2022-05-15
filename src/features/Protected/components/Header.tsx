import MobileNavigation from './MobileNavigation';
import UserNavigation from './UserNavigation';

const Header = () => {
	return (
		<div className="relative z-10 bg-white shadow pr-5 flex justify-between md:justify-end">
			<MobileNavigation />
			<UserNavigation />
		</div>
	);
};

export default Header;
