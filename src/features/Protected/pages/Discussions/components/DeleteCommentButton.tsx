import Button from '@/components/Button/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog/ConfirmationDialog';
import React from 'react';

type DeleteCommentButtonProps = {
	id: string;
};

const DeleteCommentButton = ({ id }: DeleteCommentButtonProps) => {
	return (
		<ConfirmationDialog
			title="Delete Comment"
			triggerButton={<Button variant="danger">Delete Comment</Button>}
			confirmButton={
				<Button
					type="button"
					className="bg-red-600"
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
