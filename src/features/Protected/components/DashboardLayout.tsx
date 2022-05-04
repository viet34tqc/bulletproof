import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div>
			<Sidebar />
			<Header />
			{children}
		</div>
	);
};

export default DashboardLayout;
