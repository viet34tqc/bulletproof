import Button from '@/components/Button/Button';
import Drawer from '@/components/Drawer/Drawer';
import { useAuth } from '@/context/AuthContext';
import { PencilIcon } from '@heroicons/react/outline';
import ProfileForm from './components/ProfileForm';

const Profile = () => {
	const { user } = useAuth();
	return (
		<>
			<h1 className="mb-4">Profile</h1>
			<div className="bg-white rounded-md shadow">
				<header className="flex flex-wrap justify-between items-center p-4">
					<div>
						<p className="mb-3 font-medium text-[18px]">User Information</p>
						<p className="text-gray-500 text-[14px]">
							Personal details of the user.
						</p>
					</div>
					<Drawer
						title="Update Profile"
						triggerButton={
							<Button className="text-[14px]">
								<PencilIcon width={14} />
								Update Profile
							</Button>
						}
					>
						<ProfileForm />
					</Drawer>
				</header>
				<div>
					<ProfileRow name="First Name" value={user?.firstName} />
					<ProfileRow name="Last Name" value={user?.lastName} />
					<ProfileRow name="Email Address" value={user?.email} />
					<ProfileRow name="Role" value={user?.role} />
					<ProfileRow name="Bio" value={user?.bio} />
				</div>
			</div>
		</>
	);
};

const ProfileRow = ({
	name,
	value,
}: {
	name: string;
	value: string | undefined;
}) => {
	return (
		<div className="child:text-sm child:text-gray-500 grid grid-cols-[1fr,2fr] px-4 py-6 border-t-gray-300 border-t">
			<span className="font-medium">{name}</span>
			<span>{value}</span>
		</div>
	);
};

export default Profile;
