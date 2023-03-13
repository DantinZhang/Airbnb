import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        userName: 'zzy'
    },
    reducers: {
        changeUserName(state, action) {
            state.userName = action.payload;
        }
    }
})

export default homeSlice.reducer;