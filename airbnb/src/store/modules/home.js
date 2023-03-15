import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { reqGoodPriceInfo, reqHighScoreInfo } from '@/api/modules/home'

export const getHomeData = createAsyncThunk('homedata', (payload, context) => {
    // let result = await reqHighScoreInfo();
    // console.log('高分房源数据：',result);
    // return result;  //result会直接传给下面extraReducers的payload
    console.log(payload, context)
    //1.高分房源数据
    reqHighScoreInfo().then(res => {
        context.dispatch(changeHighScoreInfo(res))
    })
    //2.高性价比数据
    reqGoodPriceInfo().then(res => {
        console.log(res);
        context.dispatch(changeGoodPriceInfo(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        highScoreInfo: {},
        goodPriceInfo: {},
    },
    reducers: {
        changeHighScoreInfo(state, action) {
            state.highScoreInfo = action.payload;
        },
        changeGoodPriceInfo(state, { payload }) {
            state.goodPriceInfo = payload;
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
    changeHighScoreInfo, 
    changeGoodPriceInfo
} = homeSlice.actions;

export default homeSlice.reducer;