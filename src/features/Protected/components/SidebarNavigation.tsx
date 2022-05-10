import { ROLES, useAuthorization } from '@/core/authorization';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
	name: string;
	to: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const SidebarNavigation = () => {
	const { checkAccess } = useAuthorization();
	const navigation = [
		{ name: 'Dashboard', to: '.', icon: HomeIcon },
		{ name: 'Discussions', to: './discussions', icon: FolderIcon },
	] as SideNavigationItem[];
	if (checkAccess([ROLES.ADMIN])) {
		navigation.push({
			name: 'Users',
			to: './users',
			icon: UsersIcon,
		});
	}
	return (
		<>
			{navigation.map((item, index) => (
				<NavLink
					end={index === 0}
					key={item.name}
					to={item.to}
					className={navData =>
						clsx(
							'text-gray-300 hover:bg-gray-700 hover:text-white',
							'group flex items-center px-2 py-2 mb-2 last:mb-0 text-base font-medium rounded-md',
							navData.isActive && 'bg-gray-900 text-white'
						)
					}
				>
					<item.icon
						className={clsx(
							'text-gray-400 group-hover:text-gray-300',
							'mr-4 flex-shrink-0 h-6 w-6'
						)}
						aria-hidden="true"
					/>
					{item.name}
				</NavLink>
			))}
		</>
	);
};

export default SidebarNavigation;
