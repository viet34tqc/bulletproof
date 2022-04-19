import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {};

const AppProvider = ({ children }: any) => {
	return (
		<React.Suspense fallback={<div>...</div>}>
			<BrowserRouter>{children}</BrowserRouter>
		</React.Suspense>
	);
};

export default AppProvider;
