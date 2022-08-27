import { ActionTypes } from "../constants/ActionTypes";
export const SetProducts=(products)=>{
return {
    type:ActionTypes.SET_PRODUCTS,
    payload : products,
};
};

export const SelectedProduct=(product)=>{
return{
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product,
};
};

export const RemoveSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
    };