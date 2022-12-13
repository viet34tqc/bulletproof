import Button from '@/components/Button/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog/ConfirmationDialog';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useDeleteDiscussion } from '../api/deleteDiscussion';
import { DELETE_DISCUSSION_SUCCESSFULLY } from '../constants';
import { discussionKeys } from '../queryKeys';
import { Discussion } from '../types/discussion';

type DeleteDiscussionButtonProps = {
	id: string;
};

const DeleteDiscussionButton = ({ id }: DeleteDiscussionButtonProps) => {
	const deleteDiscussionMutation = useDeleteDiscussion(id);
	const queryClient = useQueryClient();

	const handleDeleteDiscussion = () => {
		// This component will be unmount if we invalidate the query in useMutation, so I will handle it here
		deleteDiscussionMutation.mutate(id, {
			onSuccess: () => {
				toast(DELETE_DISCUSSION_SUCCESSFULLY);
				queryClient.setQueryData(discussionKeys.all(), (prev: any) =>
					prev.filter((d: Discussion) => d.id !== id)
				);
			},
			onSettled: (_, error) => {
				if (!error) {
					queryClient.invalidateQueries(discussionKeys.all());
				}
			},
		});
	};

	return (
		<>
			<ConfirmationDialog
				title="Delete Discussion"
				triggerButton={<Button variant="danger">Delete Discussion</Button>}
				confirmButton={
					<Button
						type="button"
						isLoading={deleteDiscussionMutation.isLoading}
						onClick={handleDeleteDiscussion}
						className="bg-red-600"
					>
						Delete
					</Button>
				}
			>
				Are you sure you want to delete this Discussion
			</ConfirmationDialog>
		</>
	);
};

export default DeleteDiscussionButton;
