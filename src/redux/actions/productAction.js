import { ActionTypes } from "../contants/actiontype"

export const setProducts = (Products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : Products,
    }
}

export const selectedProducts = (Products) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : Products,
    }
}