//本文件用于写首页部分的接口
import hyRequest from "@/api";

//高价房源
export const reqGoodPriceInfo = () => {
    return hyRequest.request({
        method: 'get',
        url: '/home/highscore',
    })
}