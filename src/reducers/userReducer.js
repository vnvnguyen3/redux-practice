import { FETCH_USERS, LOGIN, LOGOUT, UPDATE_USER } from '../actions/types';

const initialState = {
    items: [],
    profile: {user: {userName: ""} }
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                profile: action.payload
            }
        case LOGIN:
            return {
                ...state,
                profile: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state;
    }
}