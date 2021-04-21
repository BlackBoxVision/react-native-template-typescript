import axios from 'axios';
import Env from 'react-native-config';
import camelCase from 'camelcase-keys';

import { getSession } from './sessionService';

const httpClient = axios.create({
  baseURL: Env.BASE_URL,
  timeout: 5000,
});

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  POST: 'POST',
  DELETE: 'DELETE',
};

// TODO: implement refresh token interceptor
export const fetchJson = async (url: string, config: any = {}) => {
  try {
    const { authenticated = true, token, ...options } = config;
    const source = axios.CancelToken.source();

    const request = {
      ...options,
      cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };

    if (authenticated) {
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      } else {
        const session = await getSession();

        if (__DEV__) {
          // console.info('token', session?.token);
        }

        request.headers.Authorization = `Bearer ${session?.token}`;
      }
    }

    const promise: any = httpClient.request(request);

    promise.cancel = () => source.cancel('cancelled');

    const response = await promise;

    // Handle HTML response content
    if (response.headers['content-type'].includes('text/html')) {
      return response;
    }

    return camelCase(response.data, { deep: true });
  } catch (err) {
    console.warn('[fetch] error: ', err);
    throw err;
  }
};
