import _ from 'lodash';

import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
 } from '../actions/action-types';


export default (streamState = {}, action) =>{
    switch(action.type){
        case FETCH_STREAM:
        case EDIT_STREAM:
        case CREATE_STREAM:
            return { ...streamState, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return {..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            return _.omit(...streamState, action.payload);
        default:
            return streamState;
    }
}