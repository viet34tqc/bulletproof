import Button from '@/components/Button/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog/ConfirmationDialog';
import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { useDeleteComment } from '../api/deleteComment';

type DeleteCommentButtonProps = {
	id: string;
	discussionId: string;
};

const DeleteCommentButton = ({
	id,
	discussionId,
}: DeleteCommentButtonProps) => {
	const deleteComment = useDeleteComment(discussionId);
	const handleDelete = () => {
		deleteComment.mutate(id);
	};
	return (
		<ConfirmationDialog
			title="Delete Comment"
			triggerButton={
				<Button variant="danger" size="sm">
					<TrashIcon width={14} />
					Delete Comment
				</Button>
			}
			confirmButton={
				<Button
					type="button"
					className="bg-red-600"
					isLoading={deleteComment.isLoading}
					onClick={handleDelete}
				>
					Delete
				</Button>
			}
		>
			Are you sure you want to delete this Comment
		</ConfirmationDialog>
	);
};

export default DeleteCommentButton;
