import Button from '@/components/Button/Button';
import Drawer from '@/components/Drawer/Drawer';
import React from 'react';
import DiscussionForm from './components/DiscussionForm';
import DiscussionList from './components/DiscussionList';

const Discussions = () => {
	return (
		<>
			<h1 className="mb-4">Discussions</h1>
			<div className="flex justify-end mb-4">
				<Drawer
					title="Update Profile"
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

			<DiscussionList />
		</>
	);
};

export default Discussions;
