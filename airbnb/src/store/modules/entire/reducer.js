import * as actionTypes from './constants';

let initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CHANGECOUNTER:
            return {...state, counter: action.num}
        default: 
            return state;
    }
}

export default reducer;