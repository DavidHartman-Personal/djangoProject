import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

/**
 * It returns a new state object based on the action type and the current state.  This will change and manipulate
 * at least a part of the state of the Store.  The initialState = {} an empty object.  The manipulated copy of the state
 * that is our new state will  be returned back to the store.  This reducer is actually what updates the store.
 * We only update the products part of the state.
 * If the products are loading (PRODUCT_LIST_REQUEST), this will return {loading: true products: []}
 * If the action tells us the product list request worked, we return {loading: false, products: action.payload}
 * if the action doesn't match anything just return the same state.
 * @param [state] - This is the current state of the reducer, which is an object named products
 * @param action - This is the action object that is dispatched from the action creator.
 */
export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}

/**
 * Returns a new state product object based on the action type
 * @param [state] - This is the current product state of the reducer.
 * @param action - This is the action object that is dispatched from the action creator.
 */
export const productDetailsReducer = (state = {product: {reviews:[]}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}