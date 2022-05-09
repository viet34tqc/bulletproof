import Spinner from '@/components/Spinner/Spinner';
import Table from '@/components/Table/Table';
import React from 'react';
import { User } from '../../types/User';
import { useUsers } from './api/getUsers';
import DeleteUserButton from './components/DeleteUserButton';

const Users = () => {
	const { data: users, isLoading } = useUsers();

	if (isLoading) {
		return (
			<div className="w-full h-48 flex justify-center items-center">
				<Spinner size="lg" />
			</div>
		);
	}

	return (
		<>
			<h1 className="mb-4">User</h1>

			{users && users.length > 0 && (
				<Table<User>
					data={users}
					columns={[
						{
							name: 'First Name',
							field: 'firstName',
						},
						{
							name: 'Last Name',
							field: 'lastName',
						},
						{
							name: 'Email',
							field: 'email',
						},
						{
							name: 'Role',
							field: 'role',
						},
						{
							name: 'Created At',
							field: 'createdAt',
							Cell: ({ entry: { createdAt } }) => <span>{createdAt}</span>,
						},
						{
							name: '',
							field: 'id',
							Cell: ({ entry: { id } }) => <DeleteUserButton id={id} />,
						},
					]}
				/>
			)}
		</>
	);
};

export default Users;
