//本文件用于写首页部分的接口
import zyRequest from "@/api";

//高分房源
export const reqHighScoreInfo = () => {
    return zyRequest.request({
        method: 'get',
        url: '/home/highscore',
    })
}

//高性价比房源
export const reqGoodPriceInfo = () => {
    return zyRequest.request({
        method: 'get',
        url: '/home/goodprice',
    })
}

//折扣数据
export const reqDiscountInfo = () => {
    return zyRequest.request({
        method: 'get',
        url: '/home/discount',
    })
}

//热门推荐
export const reqHotInfo = () => {
    return zyRequest.request({
        method: 'get',
        url: '/home/hotrecommenddest'
    })
}

//向往城市
export const reqLongforInfo = () => {
    return zyRequest.request({
        method: 'get',
        url: '/home/longfor'
    })
}

//plus房源
export const reqPlusInfo = () => {
    return zyRequest.request({
        method:'get',
        url: '/home/plus'
    })
}