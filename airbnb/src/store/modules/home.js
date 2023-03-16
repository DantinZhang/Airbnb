import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    reqDiscountInfo,
    reqGoodPriceInfo,
    reqHighScoreInfo,
    reqHotInfo,
    reqLongforInfo,
    reqPlusInfo,
} from '@/api/modules/home'

export const reqHomeData = createAsyncThunk('homedata', (payload, context) => {
    // let result = await reqHighScoreInfo();
    // console.log('高分房源数据：',result);
    // return result;  //result会直接传给下面extraReducers的payload
    console.log(payload, context)
    //1.高分房源数据
    reqHighScoreInfo().then(res => {
        context.dispatch(getHighScoreInfo(res))
    })
    //2.高性价比数据
    reqGoodPriceInfo().then(res => {
        context.dispatch(getGoodPriceInfo(res))
    })
    //3.折扣(热门目的地)数据
    reqDiscountInfo().then(res => {
        context.dispatch(getDiscountInfo(res));
    })
    //4.热门推荐数据
    reqHotInfo().then(res => {
        context.dispatch(getHotInfo(res));
    })
    //5.向往城市数据
    reqLongforInfo().then(res => {
        context.dispatch(getLongforInfo(res))
    })
    //6.更多房源数据
    reqPlusInfo().then(res => {
        context.dispatch(getPlusInfo(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        highScoreInfo: {},
        goodPriceInfo: {},
        discountInfo: {},
        hotInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        getHighScoreInfo(state, action) {
            state.highScoreInfo = action.payload;
        },
        getGoodPriceInfo(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        getDiscountInfo(state, { payload }) {
            state.discountInfo = payload;
        },
        getHotInfo(state, { payload }) {
            state.hotInfo = payload;
        },
        getLongforInfo(state, { payload }) {
            state.longforInfo = payload;
        },
        getPlusInfo(state, {payload}) {
            state.plusInfo = payload;
        }
    },

    // extraReducers: {
    //     [getHighScoreInfo.fulfilled](state, {payload}) {
    //         state.highScoreInfo = payload;
    //     },
    //     [getHighScoreInfo.rejected](state, {payload}) {
    //         console.log('请求数据有错误！失败！')
    //     }
    // }
})

export const {
    getHighScoreInfo,
    getGoodPriceInfo,
    getDiscountInfo,
    getHotInfo,
    getLongforInfo,
    getPlusInfo,
} = homeSlice.actions;

export default homeSlice.reducer;