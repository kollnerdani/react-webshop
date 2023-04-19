import {CART_ACTION_TYPES} from "./cart.types";
import { createAction } from "../../utils/reducer/reducer";

const addCartItem = (cartItems, productToAdd) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingProduct){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if (existingProduct.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id );
    }
    return cartItems.map(cartItem =>
        cartItem.id ===cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity -1} : cartItem
    )

}

const deleteCartProduct = (cartItems, productToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== productToDelete.id );
}
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = deleteCartProduct(cartItems, productToDelete)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

