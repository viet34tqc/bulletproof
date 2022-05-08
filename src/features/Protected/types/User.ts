import { BaseEntity } from '@/types/BaseEntity';

export type User = {
	firstName: string;
	lastName: string;
	email: string;
	role: 'ADMIN' | 'USER';
	teamId: string;
	bio: string;
} & BaseEntity;
