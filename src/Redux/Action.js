import { getAllAtroidData, getAtroidData } from "../Service/service"
import * as types from './ActionType';



const ALL_Stroid_Data = data => ({
    type: types.GET_ASTOIDS_DATA,
    payload: data
})

const ASTROID_DETAILS = data => ({
    type: types.GET_ASTOID,
    payload: data
})

export const getAllAstroidData = () => {
    return async (dispatch) => {
        await getAllAtroidData().then(res => {
            const response = res?.data?.near_earth_objects;
            dispatch(ALL_Stroid_Data(response))
        }).catch(er => {
            return er
        })
    }
}

export const getAstoridDetails = (id) => {
    return async (dispatch) => {
        await getAtroidData(id).then(res => {
            const response = res?.data;
            dispatch(ASTROID_DETAILS(response))
        }).catch(er => {
            return er
        })
    }
}


