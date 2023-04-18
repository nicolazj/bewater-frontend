import { CONFIGS } from '@/config';
import { isBrowser } from '@/constants';
import { useAuthStore } from '@/stores/auth';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

/**
 *  interceptors
 */

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = useAuthStore.getState().token;
  if (!!accessToken && !!config.headers) {
    config.headers['authorization'] = `Bearer ${accessToken}`;
  }
  return config;
};

const responseInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    useAuthStore.setState({
      token: '',
      user: undefined,
    });
  }
  return Promise.reject(error);
};

const responseDataInterceptor = (resp: AxiosResponse) => {
  if (resp.data.status === 'SUCCESS' && resp.data.status_code === 200) {
    resp.data = resp.data.data;
  } else {
    throw resp;
  }
  return resp;
};

/**
 *  agentAuthed
 */
const agentAuthed = axios.create({
  baseURL: CONFIGS.API_ENDPOINT,
});

agentAuthed.interceptors.request.use(requestInterceptor);
agentAuthed.interceptors.response.use(
  responseDataInterceptor,
  responseInterceptor,
);

/**
 *  agentAnon
 */
const agentAnon = axios.create({
  baseURL: CONFIGS.API_ENDPOINT,
});

agentAnon.interceptors.response.use(
  responseDataInterceptor,
  responseInterceptor,
);

const agentNext = axios.create({
  baseURL: isBrowser ? window.location.origin : '',
});

export { agentAuthed, agentAnon, agentNext };
