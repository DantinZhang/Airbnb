//本文件用于写首页部分的接口
import hyRequest from "@/api";

//高分房源
export const reqHighScoreInfo = () => {
    return hyRequest.request({
        method: 'get',
        url: '/home/highscore',
    })
}

//高性价比房源
export const reqGoodPriceInfo = () => {
    return hyRequest.request({
        method: 'get',
        url: '/home/goodprice',
    })
}

//折扣数据
export const reqDiscountInfo = () => {
    return hyRequest.request({
        method: 'get',
        url: '/home/discount',
    })
}