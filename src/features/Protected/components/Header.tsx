import React from 'react';
import UserNavigation from './UserNavigation';

const Header = () => {
	return (
		<div className="relative z-10 bg-white shadow p-6 flex justify-between md:justify-end">
			<UserNavigation />
		</div>
	);
};

export default Header;
