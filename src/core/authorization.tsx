import { useAuth } from '@/context/AuthContext';
import { Comment } from '@/features/Protected/pages/Discussions/types/comment';
import { User } from '@/features/Protected/types/User';
import * as React from 'react';

export enum ROLES {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export type RoleTypes = keyof typeof ROLES;

export const POLICIES = {
	'comment:delete': (user: User, comment: Comment) => {
		if (user.role === 'ADMIN') {
			return true;
		}

		if (user.role === 'USER' && comment.authorId === user.id) {
			return true;
		}

		return false;
	},
};

export const useAuthorization = () => {
	const { user } = useAuth();

	if (!user) {
		throw Error('User does not exist!');
	}

	const checkAccess = React.useCallback(
		(allowedRoles: RoleTypes[]) => {
			if (allowedRoles && allowedRoles.length > 0) {
				return allowedRoles?.includes(user.role);
			}

			return true;
		},
		[user.role]
	);

	return { checkAccess, role: user.role };
};
