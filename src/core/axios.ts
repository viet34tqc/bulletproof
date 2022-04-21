import { API_URL } from '@/config';
import storage from '@/utils/storage';
import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

function authRequestInterceptor(config: AxiosRequestConfig) {
	const token = storage.getToken();
	const header = config.headers as AxiosRequestHeaders;
	if (token) {
		header.authorization = `${token}`;
	}
	header.Accept = 'application/json';
	return config;
}

export const axiosInstance = Axios.create({
	baseURL: API_URL,
});

axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	}
);
