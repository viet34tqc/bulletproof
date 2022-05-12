import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
	return (
		<aside className="flex flex-col min-h-screen">
			<div className="text-center p-4 bg-gray-900 font-[32px] text-white">
				Bullet
			</div>
			<div className="bg-gray-800 py-4 px-2 flex-1">
				<SidebarNavigation />
			</div>
		</aside>
	);
};

export default Sidebar;
