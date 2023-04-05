import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) =>{
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
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    totalValue: 0,
    deleteItemFromCart: () => {}
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])
    useEffect( () =>{
        const newTotalValue = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setTotalValue(newTotalValue)
    })

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartProduct(cartItems, productToDelete));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, totalValue, removeItemFromCart, deleteItemFromCart}

    return <CartContext.Provider value={ value }>{children}</CartContext.Provider>
}