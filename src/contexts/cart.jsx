import {createContext, useReducer} from "react";

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
const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    totalValue: 0
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case  CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            ...payload
        }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);

    }
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
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [totalValue, setTotalValue] = useState(0)
    // useEffect(() =>{
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])
    // useEffect( () =>{
    //     const newTotalValue = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    //     setTotalValue(newTotalValue)
    // })
    const [{ isCartOpen, cartItems, cartCount, totalValue }, dispatch] = useReducer(cartReducer, INITIAL_STATE )
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newTotalValue = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, totalValue: newTotalValue, cartCount: newCartCount }})
    }
    const setIsCartOpen = (boolean) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean })
    }
    const addItemToCart = (productToAdd) =>{
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)

    }

    const deleteItemFromCart = (productToDelete) => {
        const newCartItems = deleteCartProduct(cartItems, productToDelete)
        updateCartItemReducer(newCartItems)
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        totalValue,
        removeItemFromCart,
        deleteItemFromCart
    }

    return <CartContext.Provider value={ value }>{children}</CartContext.Provider>
}