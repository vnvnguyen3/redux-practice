import { FETCH_RESTAURANTS, NEW_RESTAURANT } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_RESTAURANTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_RESTAURANT:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}