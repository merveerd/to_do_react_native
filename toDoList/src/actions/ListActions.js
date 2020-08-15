import {
    UPDATE_LIST,
    SET_LIST,
    REMOVE_TODO,
    ADD_LIST_LOCAL
} from './types'
import AsyncStorage from '@react-native-community/async-storage'


export const updateList = (payload) => { //Tododetails ten payload'i getirdik object olarak, input valuelari cekip
    return (dispatch) => {
       dispatch({  type: UPDATE_LIST, payload })
    }
}

export const getList = () => {
    return async (dispatch) => {
        let data = await AsyncStorage.getItem(ADD_LIST_LOCAL)
        console.log('Lokaldeki veri: ', data);
        if (data) {
            dispatch({  type: SET_LIST, payload: JSON.parse(data) })
        }
            
    }
}

export const removeTodo = (payload) => {
    return(dispatch) => {
        dispatch({  type: REMOVE_TODO, payload })
    }
}
