import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/cartConstants'
import axios from 'axios'

/**
 * It's a function that returns a function that takes a dispatch function as an argument.  This function will replace the API
 * call in the HomeScreen.js file. The HomeScreen file will be updated to then trigger the listProducts action.
 * Once the data is retrieved, a new action will be dispatched.
 */
export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        console.log('Adding item: ' , String(id), ' with qty', String(qty))
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    } catch (error) {
        console.log('Error in adding item to cart.', error)
    }
}
