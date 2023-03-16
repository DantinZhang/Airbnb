import * as actionTypes from './constants';

let initialState = {
    currentPage: 0, //当前页码
    roomList: [], //房间列表
    totalCount: 0, //数据总数
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENTPAGE:
            return { ...state, currentPage: action.page }
        case actionTypes.CHANGE_ROOMLIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_TOTALCOUNT:
            return { ...state, totalCount: action.totalCount }
        default:
            return state;
    }
}

export default reducer;