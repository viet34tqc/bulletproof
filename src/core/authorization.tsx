import { useAuth } from '@/context/AuthContext';
import * as React from 'react';

export enum ROLES {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

type RoleTypes = keyof typeof ROLES;

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
