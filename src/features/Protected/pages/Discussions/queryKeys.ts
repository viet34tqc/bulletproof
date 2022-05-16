export const commentKeys = {
	all: (discussionId: string) => ['comments', discussionId] as const,
};

export const discussionKeys = {
	all: () => ['discussions'] as const,
	detail: (id: string) => [...discussionKeys.all(), id] as const,
};
