import { SIGN_IN, SIGN_OUT } from '../actions/action-types';

const INITIAL_STATE = {
    isSignedIn: null
};
export default (authState = INITIAL_STATE, action) =>{
    switch (action.type){
        case SIGN_IN:
            return {...authState, 
                isSignedIn: true,
                userId: action.payload
            };
        case SIGN_OUT:
            return {...authState, 
                isSignedIn: false,
                userId: null
            };
        default:
            return authState;
    }
};