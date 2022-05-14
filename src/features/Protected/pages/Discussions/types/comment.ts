import { BaseEntity } from '@/types/BaseEntity';

export type Comment = {
	body: string;
	authorId: string;
	discussionId: string;
} & BaseEntity;
