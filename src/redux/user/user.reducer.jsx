
import { USerActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USerActionTypes.SET_CURRENT_USER:
            
            return {
                ...state,
                currentUser:action.payload.currentUser
            };
    
        default:
            return state;
    }
}

export default userReducer;