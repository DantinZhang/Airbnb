import axios from 'axios';
import { BASEURL, TIMEOUT } from './config';

class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        this.instance.interceptors.response.use(res => {
            return res.data;
        })
    }

    request(config) {
        return this.instance.request(config);
    }

    get(config) {
        return this.request({...config, method: 'get'});
    }

    post(config) {
        return this.request({...config, method: 'post'});
    }
}

//用变量存储baseURL的话，如果有其他的url，只需要导出其他的实例就可以了
export default new HYRequest(BASEURL, TIMEOUT);