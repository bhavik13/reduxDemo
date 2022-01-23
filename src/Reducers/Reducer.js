import { GET_USER, GET__SUCCESS_USER, GET_FAILURE_USER, DELETE_USER } from '../Actions';

export const INITIAL_STATE = { users: [], isLoading: false };

const appReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case GET_USER: 
            return {...state, isLoading: true};

        case GET__SUCCESS_USER: 
            return {...state, isLoading: false, users: action.payload };
        
        case GET_FAILURE_USER: 
            return {...state, isLoading: false };   

        case DELETE_USER:
            // var users = [...state.users];
            // const userIndex = users.findIndex((x) => x.id == action.payload.id);
            // users.splice(userIndex, 1);
            // return {...state, users: users };
            return {
                ...state,
                users: state.users.filter(user => action.payload.id != user.id)
            }

        default:
            return state;
    }
}

export default appReducer;
