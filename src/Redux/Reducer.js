import * as types from './ActionType';

const ini = {}


const Reducer = (state = ini, action) => {
    switch (action.type) {
        case types.GET_ASTOIDS_DATA:
            return {
                ...state,
                payload: action.payload
            }

        case types.GET_ASTOID:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return { ...state }
    }
}



export default Reducer;