export const CART_ADD_ACTION = "CART_ADD_ACTION";
export const CART_REMOVE_ACTION = "CART_REMOVE_ACTION";
export const CART_FILTER_ACTION = "IS_FILTER_ACTION";
export const CART_ACTION = "CART_ACTION";

export const addtoCart = ({item}) => {
    return {
        type: CART_ADD_ACTION,
        item
    }
}
export const removetoCart = ({item}) => {
    return {
        type : CART_REMOVE_ACTION,
        item
    }
}

export const cartAction = ({item}) => {
    return {
        type : CART_ACTION,
        item
    }
}
