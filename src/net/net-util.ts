import axios from 'axios';

/**
 * 生成netApi对象
 * @param config api配置
 * @param useInterceptors 全局拦截器
 * @return {AxiosInstance}
 */
export function generateNet(config: object, useInterceptors: (params: any) => void): object {
    const netApi = axios.create(config);
    useInterceptors(netApi);
    return netApi;
}

/**
 * 生成grpcApi对象
 * @param config api配置
 * @param useInterceptors 全局拦截器
 * @return {AxiosInstance}
 */
// export function generateGrpcApi(config: object, useInterceptors: any): object {
//     const grpcApi = new GrpcClient(config);
//     useInterceptors(grpcApi);
//     return grpcApi;
// }
