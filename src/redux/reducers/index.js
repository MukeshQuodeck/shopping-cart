import {combineReducers} from 'redux';
import { productsReducer,selectedProductsReducer} from './productReducer';

const reducers = combineReducers ({
        allproducts : productsReducer,
        product: selectedProductsReducer
});

export default reducers;