export const initMocks = () => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { worker } = require('./worker');
	worker.start({
		serviceWorker: {
			url: '/mockServiceWorker.js',
		},
	});
};
