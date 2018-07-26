/**
 * api配置和全局拦截
 */
import qs from 'qs';
import baseConfig from './config';

export const config: any = {
    timeout: baseConfig.network.timeout,
    withCredentials: baseConfig.network.withCredentials,
    paramsSerializer(params: object): string {
        return qs.stringify(params, { arrayFormat: 'brackets'});
    },
    headers: baseConfig.network.headers,
};

export function useInterceptors(netApi: any): any {
  netApi.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    },
  );
}
