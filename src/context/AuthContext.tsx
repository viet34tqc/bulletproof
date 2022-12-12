import Spinner from '@/components/Spinner/Spinner';
import { getCurrentUser } from '@/features/Auth/api/getUser';
import { LoginCredentialsDTO, loginUser } from '@/features/Auth/api/login';
import {
	RegisterCredentialsDTO,
	registerUser,
} from '@/features/Auth/api/register';
import { AuthUser, UserResponse } from '@/features/Auth/types';
import storage from '@/utils/storage';
import React, { createContext, useContext } from 'react';
import {
	QueryObserverResult,
	RefetchOptions,
	useMutation,
	UseMutationResult,
	useQuery,
	useQueryClient,
} from 'react-query';

interface AuthContextValues {
	user: AuthUser | null | undefined;
	loginMutation: UseMutationResult<AuthUser, any, LoginCredentialsDTO>;
	logoutMutation: UseMutationResult<any, any, void, any>;
	registerMutation: UseMutationResult<AuthUser, any, RegisterCredentialsDTO>;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	isRegistering: boolean;
	refetchUser: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<AuthUser | null, unknown>>;
	error: unknown;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValues | null>(null);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
	const queryClient = useQueryClient(); // returns the current QueryClient instance created in AppProvider.
	const queryKey = 'auth-user';

	// This is much like setUser using setState,
	// but instead of saving the user in the state, we are saving it using useQuery with a key
	// This query runs every time the app is mounted.
	// If the token is saved before (when you login or register), it calls API to get that user.
	const {
		data: user,
		error,
		status,
		isLoading,
		isIdle,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey,
		queryFn: loadUser,
		staleTime: Infinity,
	});
	async function loadUser() {
		if (storage.getToken()) {
			const data = await getCurrentUser();
			return data;
		}
		return null;
	}

	const setUser = React.useCallback(
		(data: AuthUser) => queryClient.setQueryData(queryKey, data),
		[queryClient]
	);

	async function setUserToken(data: UserResponse) {
		const { jwt, user } = data;
		storage.setToken(jwt);
		return user;
	}

	async function loginFn(data: LoginCredentialsDTO) {
		const response = await loginUser(data);
		const user = await setUserToken(response);
		return user;
	}

	async function registerFn(data: RegisterCredentialsDTO) {
		const response = await registerUser(data);
		const user = await setUserToken(response);
		return user;
	}

	async function logoutFn() {
		storage.clearToken();
	}

	const loginMutation = useMutation({
		mutationFn: loginFn,
		onSuccess: user => {
			setUser(user);
		},
	});

	const registerMutation = useMutation({
		mutationFn: registerFn,
		onSuccess: user => {
			setUser(user);
		},
	});

	const logoutMutation = useMutation({
		mutationFn: logoutFn,
		onSuccess: () => {
			setUser(null as never);
			queryClient.clear();
		},
	});

	const value = React.useMemo(
		() => ({
			user,
			error,
			refetchUser: refetch,
			loginMutation,
			isLoggingIn: loginMutation.isLoading,
			logoutMutation,
			isLoggingOut: logoutMutation.isLoading,
			registerMutation,
			isRegistering: registerMutation.isLoading,
		}),
		[user, error, refetch, loginMutation, logoutMutation, registerMutation]
	);

	if (isSuccess) {
		return (
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		);
	}

	if (isLoading || isIdle) {
		return (
			<div className="w-screne h-screen grid place-items-center">
				<Spinner size="xl" />
			</div>
		);
	}

	if (error) {
		return (
			<div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>
		);
	}

	return (
		<div className="h-screen w-screen grid place-items-center">
			Unhandled status: {status}
		</div>
	);
};
export default AuthContextProvider;
export const useAuth = () => {
	const context = useContext(AuthContext) as AuthContextValues;
	if (context === undefined) {
		throw new Error('useSomething must be used within a SomethingProvider');
	}
	return context;
};
