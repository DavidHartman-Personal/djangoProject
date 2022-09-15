import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'
import axios from 'axios'

/**
 * It's a function that returns a function that takes a dispatch function as an argument.  This function will replace the API
 * call in the HomeScreen.js file. The HomeScreen file will be updated to then trigger the listProducts action.
 * Once the data is retrieved, a new action will be dispatched.
 */
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.reponse && error.response.data.message
                ? error.reponse.data.message
                : error.message
        })
    }
}


/**
 * It's an async function that takes in an id, dispatches a request action, makes an axios call to the server, and then
 * dispatches a success action with the data from the server
 * @param id - The id of the product to be fetched
 */
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.reponse && error.response.data.message
                ? error.reponse.data.message
                : error.message
        })
    }
}