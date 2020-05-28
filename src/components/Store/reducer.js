import * as actionTypes from './actions';

const initialState = {
    sideDrawerOpen: false
}

const reducer = (state=initialState, action ) => {
    switch(action.type) {
        case actionTypes.SHOW_DRAWER:
            return {
                ...state,
                sideDrawerOpen: action.param,
            }
        default:
            return state
    }

}

export default reducer