import { BaseEntity } from '@/types/BaseEntity';

export type Team = {
	name: string;
	description: string;
} & BaseEntity;
