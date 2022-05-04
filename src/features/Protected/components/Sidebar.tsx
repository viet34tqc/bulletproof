import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
	return (
		<aside>
			<div className="text-center p-4 bg-gray-900 font-[32px] text-white">
				Bullet
			</div>
			<div className="bg-gray-800 py-4 px-2 h-[100vh]">
				<SidebarNavigation />
			</div>
		</aside>
	);
};

export default Sidebar;
