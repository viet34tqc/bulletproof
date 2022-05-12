import Button from '@/components/Button/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog/ConfirmationDialog';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { useDeleteUser } from '../api/deleteUser';

type DeleteUserButtonProps = {
	id: string;
};

const DeleteUserButton = ({ id }: DeleteUserButtonProps) => {
	const { user } = useAuth();
	const deleteUserMutation = useDeleteUser();

	if (user?.id === id) return null;

	const handleDeleteUser = (id: string) => {
		deleteUserMutation.mutate(id);
	};

	return (
		<ConfirmationDialog
			title="Delete User"
			triggerButton={<Button variant="danger">Delete User</Button>}
			confirmButton={
				<Button
					type="button"
					isLoading={deleteUserMutation.isLoading}
					onClick={() => handleDeleteUser(id)}
					className="bg-red-600"
				>
					Delete
				</Button>
			}
		>
			Are you sure you want to delete this user
		</ConfirmationDialog>
	);
};

export default DeleteUserButton;
