import Authorization from '@/components/Authorization/Authorization';
import Button from '@/components/Button/Button';
import Drawer from '@/components/Drawer/Drawer';
import { ROLES } from '@/core/authorization';
import DiscussionForm from '../components/DiscussionForm';
import DiscussionList from '../components/DiscussionList';

const Discussions = () => {
	return (
		<>
			<h1 className="mb-4">Discussions</h1>
			<Authorization allowedRoles={[ROLES.ADMIN]}>
				<div className="flex justify-end mb-4">
					<Drawer
						title="Create Discussion"
						triggerButton={
							<Button className="text-[14px]">
								<span>+</span>
								Create Discussion
							</Button>
						}
					>
						<DiscussionForm />
					</Drawer>
				</div>
			</Authorization>

			<DiscussionList />
		</>
	);
};

export default Discussions;
