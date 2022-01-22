import { DELETE_USER, GET_FAILURE_USER, GET_USER, GET__SUCCESS_USER } from '../Actions';
import HttpUtility, { FETCHUSERS } from '../Utility/HttpUtility';

export const getUser = dispatch => { 
    var url = FETCHUSERS;
    dispatch({ type: GET_USER });
    HttpUtility.getRequest(url).then((response) => {
        if(response.data)
            dispatch({ type: GET__SUCCESS_USER, payload: response.data });
        else
            dispatch({ type: GET_FAILURE_USER });
    })
        
}

export const deleteUser = (dispatch, item) => {
    dispatch({ type: DELETE_USER, payload: item });
}