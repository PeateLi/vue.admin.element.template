import {Interceptors} from '@/api/interceptors';
import { Message } from 'element-ui' // 引入eleementui信息提示组件进行弹窗提醒
import QS from 'qs'
import router from '../router';
export class HttpService {
    public axios: any;
    public modal: any;
    constructor() {
        // 获取axios实例
        this.axios = new Interceptors().getInterceptors();
    }
    /**
     * get请求
     * @param params  参数
     * @param url   接口路径
     */
    public getData(url:String, params:Object) {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
            params: params
            }).then((res:any) => {
                this.resultHandle(res, resolve);
            }).catch((err:any) => {
                reject(err.message);
            })
        })
    }

    /**
     * post请求
     * @param params  参数
     * @param url   接口路径
     */
    public postData(url:String, params:Object) {
        return new Promise((resolve, reject) => {
            this.axios.post(url, QS.stringify(params))
            .then((res:any) => {
                this.resultHandle(res, resolve);
            })
            .catch((err:any) => {
                reject(err.message);
            })
        })

    }

    /**
     *
     * @param res
     * @param resolve
     */
    public resultHandle(res: any, resolve:any) {
        if (res.Code > 0) {
            Message({
                message: '请求成功',
                type: 'success'
            });
            resolve(res);
        } else {
            this.errorHandle(res);
        }
    }
    
    /**
     * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分)
     * @param res
     */
    public errorHandle(res: any) {
        Message({
            message: '请求出错',
            type: 'warning',
            duration: 1500,
        });  // 统一谈服务端提示,我们提示统一由服务端提供
        // 状态码判断
        switch (res.status) {
            case -102: 
                break;
            case -152:
                break;
            default:
            // console.log(other);
        }
    }
}