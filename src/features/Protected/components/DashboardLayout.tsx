import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="grid md:grid-cols-[1fr_4.5fr]">
			<Sidebar />
			<div className="flex flex-col">
				<Header />
				<div className="bg-gray-100 flex-1 p-8 overflow-y-auto">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
