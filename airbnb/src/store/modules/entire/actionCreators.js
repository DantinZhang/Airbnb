import { reqEntireRoomList } from '@/api/modules/entire';
import * as actionTypes from './constants';

export const getCurrentPage = (page) => {
    return {
        type: actionTypes.CHANGE_CURRENTPAGE,
        page
    }
}

export const getRoomList = (roomList) => {
    return {
        type: actionTypes.CHANGE_ROOMLIST,
        roomList
    }
}

export const getTotalCount = (totalCount) => {
    return {
        type: actionTypes.CHANGE_TOTALCOUNT,
        totalCount
    }
}

export const reqRoomList = () => {
    return async (dispatch, getState) => {
        let { currentPage } = getState().entire;
        console.log(currentPage)
        //带参数请求数据，currentPage肯定是在点击分页器的时候改变它的值,那边是先改再发请求
        let result = await reqEntireRoomList(20 * currentPage);
        console.log(result);

        //修改仓库中的数据
        dispatch(getRoomList(result.list));
        dispatch(getTotalCount(result.totalCount));
    }
}