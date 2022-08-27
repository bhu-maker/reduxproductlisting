import {combineReducers} from 'redux';
import { ProductReducer, SelectedProductReducer } from './ProductReducer';
const reducer = combineReducers({
    allproducts : ProductReducer,
    product : SelectedProductReducer
})
export default reducer

