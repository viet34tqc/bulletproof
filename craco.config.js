const path = require('path');
const webpack = require('webpack');
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		plugins: [
			// Fix process is not defined in webpack 5
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),
			// Fix buffer is not defined in webpack 5. If it doesn't work, remove node_modules and reinstall the packages
			new webpack.ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
		],
		// Fix modules not found in webpack 5
		configure: {
			resolve: {
				fallback: {
					http: require.resolve('stream-http'),
					https: require.resolve('https-browserify'),
					stream: require.resolve('stream-browserify'),
					zlib: require.resolve('browserify-zlib'),
					os: require.resolve('os-browserify/browser'),
					tty: require.resolve('tty-browserify'),
					timers: require.resolve('timers-browserify'),
					crypto: require.resolve('crypto-browserify'),
					buffer: require.resolve('buffer/'),
				},
			},
		},
	},
};
