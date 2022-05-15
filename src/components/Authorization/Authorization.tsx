import { RoleTypes, useAuthorization } from '@/core/authorization';
import React, { ReactNode } from 'react';

type AuthorizationProps = {
	children: ReactNode;
	fallbackChildren?: ReactNode;
} & (
	| {
			allowedRoles: RoleTypes[];
			policyCheck?: never;
	  }
	| {
			allowedRoles?: never;
			policyCheck: boolean;
	  }
);

// We have 2 authorization criterias: roles and policies

const Authorization = ({
	children,
	fallbackChildren = null,
	allowedRoles,
	policyCheck,
}: AuthorizationProps) => {
	const { checkAccess } = useAuthorization();

	let canAccess = false;

	if (allowedRoles) {
		canAccess = checkAccess(allowedRoles);
	}

	if (typeof policyCheck !== 'undefined') {
		canAccess = policyCheck;
	}

	return <>{canAccess ? children : fallbackChildren}</>;
};

export default Authorization;
