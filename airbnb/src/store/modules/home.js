import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {reqGoodPriceInfo} from '@/api/modules/home'

export const getGoodPriceInfo = createAsyncThunk('reqdata',async () => {
    let result = await reqGoodPriceInfo();
    console.log('高分房源数据：',result);
    return result;  //result会直接传给下面extraReducers的payload
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfo(state, action) {
            state.goodPriceInfo = action.payload;
        }
    },

    extraReducers: {
        [getGoodPriceInfo.fulfilled](state, {payload}) {
            state.goodPriceInfo = payload;
        },
        [getGoodPriceInfo.rejected](state, {payload}) {
            console.log('请求数据有错误！失败！')
        }
    }
})

export const {changeGoodPriceInfo} = homeSlice.actions;

export default homeSlice.reducer;