import { USerActionTypes } from "./user.types";


export const setCurrentUser = user =>({
    type:USerActionTypes.SET_CURRENT_USER,
    payload:user
})