import axios from 'axios';
import { BASEURL, TIMEOUT } from './config';

class ZYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        this.instance.interceptors.response.use(res => {
            return res.data;
        }, err => {
            alert(err);
            //全部异常均在此捕获，返回pending状态的promise
            return new Promise(() => {});
        })
    }

    request(config) {
        return this.instance.request(config);
    }
}

//用变量存储baseURL的话，如果有其他的url，只需要导出其他的实例就可以了
export default new ZYRequest(BASEURL, TIMEOUT);