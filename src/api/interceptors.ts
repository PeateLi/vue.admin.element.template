import axios from 'axios';
import { Message } from 'element-ui' // 引入eleementui信息提示组件进行弹窗提醒

export class Interceptors {
    public instance: any;
    constructor() {
        // 创建axios实例
        this.instance = axios.create({timeout: 1000 * 12});
        // 初始化拦截器
        this.initInterceptors();
    }

    // 为了让http.ts中获取初始化好的axios实例
    public getInterceptors() {
        return this.instance;
    }

     // 初始化拦截器
    public initInterceptors() {
        // 设置post请求头
        this.instance.defaults.baseURL = 'http://192.168.123.189:8083/'
        this.instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
        this.instance.interceptors.request.use(
            (config:any) => {
                // if (config.headers.isJwt) {
                //     const token = localStorage.getItem('id_token');
                //     if (token) {
                //         config.headers.Authorization = 'Bearer ' + token;
                //     }
                // }
                return config;
            },
            (error:any) => {
                console.log(error);
            },
        );


        // 响应拦截器
        this.instance.interceptors.response.use(
            // 请求成功
            (res:any) => {

                if (res.status === 200) {
                    return Promise.resolve(res.data);
                } else {
                    this.errorHandle(res);
                    return Promise.reject(res.data);
                }
            },
            // 请求失败
            (error:any) => {
                const {response} = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围
                    this.errorHandle(response);
                    return Promise.reject(response.data);
                } else {
                    // 处理断网的情况
                    Message({
                        message: '网络连接异常,请稍后再试!',
                        type: 'error',
                        duration: 1500,
                    })
                }
            });
    }

    /**
        * http握手错误
        * @param res  响应回调,根据不同响应进行不同操作
        */
    private errorHandle(res: any) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                Message({
                    message: '请求的资源不存在!',
                    type: 'error',
                    duration: 1500,
                })
                break;
            default:
                Message({
                    message: '连接错误!',
                    type: 'error',
                    duration: 1500,
                })
        }
    }
}