import { BaseEntity } from '@/types/BaseEntity';

export type Discussion = {
	title: string;
	body: string;
	teamId: string;
} & BaseEntity;
