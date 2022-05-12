import Button from '@/components/Button/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog/ConfirmationDialog';
import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteDiscussion } from '../api/deleteDiscussion';

type DeleteDiscussionButtonProps = {
	id: string;
};

const DeleteDiscussionButton = ({ id }: DeleteDiscussionButtonProps) => {
	const deleteDiscussionMutation = useDeleteDiscussion();

	const handleDeleteDiscussion = (id: string) => {
		deleteDiscussionMutation.mutate(id);
	};

	return (
		<ConfirmationDialog
			title="Delete Discussion"
			triggerButton={<Button variant="danger">Delete Discussion</Button>}
			confirmButton={
				<Button
					type="button"
					isLoading={deleteDiscussionMutation.isLoading}
					onClick={() => handleDeleteDiscussion(id)}
					className="bg-red-600"
				>
					Delete
				</Button>
			}
		>
			Are you sure you want to delete this Discussion
		</ConfirmationDialog>
	);
};

export default DeleteDiscussionButton;
