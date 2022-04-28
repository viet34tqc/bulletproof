import AuthContextProvider from '@/context/AuthContext';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AppProviderProps = {
	children: React.ReactNode;
};

const queryClient = new QueryClient();

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<Suspense fallback={<div>...</div>}>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<BrowserRouter>{children}</BrowserRouter>
					<ToastContainer />
				</AuthContextProvider>
			</QueryClientProvider>
		</Suspense>
	);
};

export default AppProvider;
