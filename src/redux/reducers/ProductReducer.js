import { ActionTypes } from "../constants/ActionTypes"

const initialState={
    products:[]
}

export const ProductReducer=(state=initialState,{type,payload})=>{
switch (type)
{
    case ActionTypes.SET_PRODUCTS:
     return {...state,products:payload};
    default :
    return state 
}
}

export const SelectedProductReducer=(state={},{type,payload})=>{
    switch (type)
    {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
            default:
                return state

    }
}