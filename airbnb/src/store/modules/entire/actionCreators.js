import * as actionTypes from './constants';

export const changeCounter = (num) => {
    return {
        type: actionTypes.CHANGECOUNTER,
        num
    }
}