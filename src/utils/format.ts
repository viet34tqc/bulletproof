export const formatDate = (timestamp: number) => {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
		timeStyle: 'short',
	}).format(new Date(timestamp));
};
